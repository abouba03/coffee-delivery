import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
import { Container, Card } from "./styles";
import expressoTradicional from "../../assets/expressoTradicional.png";
import iconAdd from "../../assets/iconAdd.svg";
import iconSub from "../../assets/iconSub.svg";
import iconPanier from "../../assets/iconPanier.svg";
import "aos/dist/aos.css";

export function CoffeeList() {
  const { coffees, updateCoffeeAmount } = useContext(CoffeeContext);

  const handleIncrease = (coffeeId: number) => {
    const updatedCoffees = coffees.map((coffee) =>
      coffee.id === coffeeId ? { ...coffee, amount: coffee.amount + 1 } : coffee
    );
    updateCoffeeAmount(coffeeId, updatedCoffees.find((coffee) => coffee.id === coffeeId)?.amount || 0);
  };

  const handleDecrease = (coffeeId: number) => {
    const updatedCoffees = coffees.map((coffee) =>
      coffee.id === coffeeId && coffee.amount >= 1 ? { ...coffee, amount: coffee.amount - 1 } : coffee
    );
    updateCoffeeAmount(coffeeId, updatedCoffees.find((coffee) => coffee.id === coffeeId)?.amount || 0);
  };

  const handlePanierClick = (coffeeId: number) => {
    const coffee = coffees.find((coffee) => coffee.id === coffeeId);
    if (coffee) {
      updateCoffeeAmount(coffeeId, coffee.amount);
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
