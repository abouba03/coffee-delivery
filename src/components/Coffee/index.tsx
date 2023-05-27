import { Container, Card } from "./styles";
import expressoTradicional from "../../assets/expressoTradicional.png";
import iconAdd from "../../assets/iconAdd.svg";
import iconSub from "../../assets/iconSub.svg";
import iconPanier from "../../assets/iconPanier.svg";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { api } from "../../service/api";
import axios from "axios";

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
      const response = await api.get("/coffees");
      setCoffees(response.data);
    }

    loadCoffees();
  }, []);

  const handleIncrease = (coffeeId: number) => {
    const updatedCoffees = coffees.map((coffee) =>
      coffee.id === coffeeId ? { ...coffee, amount: coffee.amount + 1 } : coffee
    );
    setCoffees(updatedCoffees);
  };

  const handleDecrease = (coffeeId: number) => {
    const updatedCoffees = coffees.map((coffee) =>
      coffee.id === coffeeId && coffee.amount >= 1 ? { ...coffee, amount: coffee.amount - 1 } : coffee
    );
    setCoffees(updatedCoffees);
    
  };

  const updateQuantityInDB = async (coffeeId: number, newQuantity: number) => {
    try {
      const response = await axios.patch(`http://localhost:3001/coffees/${coffeeId}`, {
        amount: newQuantity
      });
      console.log("Quantité mise à jour dans la base de données :", response.data);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la quantité dans la base de données :", error);
    }
  };

  const handlePanierClick = (coffeeId: number) => {
    const coffee = coffees.find((coffee) => coffee.id === coffeeId);
    if (coffee) {
      updateQuantityInDB(coffeeId, coffee.amount);
    }
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
                  <div className="panier" onClick={() => handlePanierClick(coffee.id)}>
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
