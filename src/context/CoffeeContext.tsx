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
}

export const CoffeeContext = createContext<CoffeeContextProps>({
  coffees: [],
  updateCoffeeAmount: () => {}
});

export function CoffeeProvider({ children }: { children: React.ReactNode }) {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

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
    updateCoffeeAmount
  };

  return (
    <CoffeeContext.Provider value={contextValue}>{children}</CoffeeContext.Provider>
  );
}
