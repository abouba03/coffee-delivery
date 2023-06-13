import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
import { Container, Content, Trasso } from "./styles";
import iconSub from "../../assets/iconSub.svg";
import iconDelete from "../../assets/iconDelete.svg";
import iconAdd from "../../assets/iconAdd.svg";

export function ItemOrderedCoffee() {

  const { coffees, updateCoffeeAmount } = useContext(CoffeeContext);

  const handleDelete = (coffeeId: number) => {
    updateCoffeeAmount(coffeeId, 0);
  };

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

  // Filtrer les cafés avec amount > 0
  const orderedCoffees = coffees.filter((coffee) => coffee.amount > 0);

  return (
    <>
      {orderedCoffees.map((coffee) => (
        <Container key={coffee.id}>
          <Content>
            <img className="imgCoffee" src={coffee.avatar} alt="" />
            <div className="card-info">
              <p>{coffee.name}</p>
              <div className="zoneUpdate">
                <div className="counter">
                  <img className="icon" src={iconSub} alt="iconAdd" onClick={() => handleDecrease(coffee.id)}/>
                  <span>{coffee.amount}</span>
                  <img className="icon" src={iconAdd} alt="iconSub" onClick={() => handleIncrease(coffee.id)} />
                </div>
                <div className="delete-btn" onClick={() => handleDelete(coffee.id)}>
                  <img className="icon" src={iconDelete} alt="" />
                  <p>REMOVER</p>
                </div>
              </div>
            </div>
            <p className="preco">
            <span> {coffee.price.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}</span>
            </p>
          </Content>
          <Trasso></Trasso>
        </Container>
      ))}
    </>
  );
}
