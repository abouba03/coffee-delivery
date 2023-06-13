import { createContext, useState, useEffect } from "react";
import axios from "axios";

interface Coffee {
  id: number;
  avatar: string;
  description: string;
  name: string;
  price: number;
  amount: number;
}

interface CoffeeContextProps {
  coffees: Coffee[];
  updateCoffeeAmount: (coffeeId: number, newAmount: number) => void;
  modoPagamento: string;
  setModoPagamento: (modoPagamento: string) => void;
}

interface FormContextProps {
  rua: string;
  cep: string;
  cidade: string;
  bairro: string;
  uf: string;
  setCEP: (value: string) => void;
  setRua: (value: string) => void;
  setCidade: (value: string) => void;
  setBairro: (value: string) => void;
  setUf: (value: string) => void;
}

export const CoffeeContext = createContext<CoffeeContextProps>({
  coffees: [],
  updateCoffeeAmount: () => {},
  modoPagamento: "",
  setModoPagamento: () => {},
});

export const FormContext = createContext<FormContextProps>({
  cep: "",
  rua: "",
  cidade: "",
  bairro: "",
  uf: "",
  setCEP: () => {},
  setRua: () => {},
  setCidade: () => {},
  setBairro: () => {},
  setUf: () => {},
});

export function CoffeeProvider({ children }: { children: React.ReactNode }) {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [modoPagamento, setModoPagamento] = useState("");

  useEffect(() => {
    async function fetchCoffees() {
      try {
        const response = await axios.get<Coffee[]>("http://localhost:3001/coffees");
        setCoffees(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des cafés :", error);
      }
    }

    fetchCoffees();
  }, []);

  const updateCoffeeAmount = async (coffeeId: number, newAmount: number) => {
    try {
      const updatedCoffees = coffees.map((coffee) =>
        coffee.id === coffeeId ? { ...coffee, amount: newAmount } : coffee
      );
      setCoffees(updatedCoffees);
      await axios.patch(`http://localhost:3001/coffees/${coffeeId}`, { amount: newAmount });
      console.log("Quantité mise à jour dans la base de données.");
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la quantité du café :", error);
    }
  };

  const contextValue: CoffeeContextProps = {
    coffees,
    updateCoffeeAmount,
    modoPagamento,
    setModoPagamento,
  };

  return (
    <CoffeeContext.Provider value={contextValue}>
      <FormProvider>{children}</FormProvider>
    </CoffeeContext.Provider>
  );
}

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [cep, setCEP] = useState("");
  const [rua, setRua] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [uf, setUf] = useState("");

  const contextValue: FormContextProps = {
    cep,
    rua,
    cidade,
    bairro,
    uf,
    setCEP,
    setRua,
    setCidade,
    setBairro,
    setUf,
  };

  return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>;
}
