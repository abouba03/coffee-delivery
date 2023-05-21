import { Container, Card } from "./styles";
import expressoTradicional from "../../assets/expressoTradicional.png";
import iconAdd from "../../assets/iconAdd.svg";
import iconSub from "../../assets/iconSub.svg";
import iconPanier from "../../assets/iconPanier.svg";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { api } from "../../service/api";

interface Coffee {
  id: number;
  avatar: string;
  description: string;
  name: string;
  price: number;
  amount: number;
}

export function CoffeeList() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    async function loadCoffees() {
      await api.get("/coffees")
      .then((response) => setCoffees(response.data));
    }

    loadCoffees();
  }, []);

  const handleIncrease = (coffeeId: number) => {
    const updatedCoffees = coffees.map((coffee) =>
      coffee.id === coffeeId ? { ...coffee, amount: coffee.amount + 1 } : coffee
    );
    setCoffees(updatedCoffees);
    updateQuantityInDB(coffeeId, updatedCoffees.find((coffee) => coffee.id === coffeeId)?.amount || 0);
  };

  const handleDecrease = (coffeeId: number) => {
    const updatedCoffees = coffees.map((coffee) =>
      coffee.id === coffeeId && coffee.amount >= 1 ? { ...coffee, amount: coffee.amount - 1 } : coffee
    );
    setCoffees(updatedCoffees);
    updateQuantityInDB(coffeeId, updatedCoffees.find((coffee) => coffee.id === coffeeId)?.amount || 0);
  };

  const updateQuantityInDB = (coffeeId: number, newQuantity: number) => {
    fetch(`http://localhost:3001/coffees/${coffeeId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: newQuantity }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Quantité mise à jour dans la base de données :", data);
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour de la quantité dans la base de données :", error);
      });
  };

  return (
    <Container>
      {coffees.map((coffee) => (
        <li key={coffee.id}>
          <Card>
            <img className="imgCard" src={expressoTradicional} alt="" />
            <div className="content">
              <div className="type">
                <p>TRADICIONAL</p>
              </div>
              <h1>{coffee.name}</h1>
              <p className="description">{coffee.description}</p>
              <div className="details">
                <p>
                  RS<span> {coffee.price}</span>
                </p>
                <div className="achat">
                  <div className="counter">
                    <img
                      className="icon"
                      onClick={() => handleDecrease(coffee.id)}
                      src={iconSub}
                      alt="iconAdd"
                    />
                    <span>{coffee.amount}</span>
                    <img
                      className="icon"
                      onClick={() => handleIncrease(coffee.id)}
                      src={iconAdd}
                      alt="iconSub"
                    />
                  </div>
                  <div className="panier">
                    <img className="icon" src={iconPanier} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </li>
      ))}
    </Container>
  );
}
