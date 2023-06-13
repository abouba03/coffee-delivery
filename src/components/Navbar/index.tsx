import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
import { Container, Links } from "./styles";
import imgLocalisation from "../../assets/Vector-localisation.svg";
import imgPanier from "../../assets/Vector-panier.svg";
import logoImg from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

export function Navbar() {
  const { coffees } = useContext(CoffeeContext);
  const [orderCount, setOrderCount] = useState<number>(0);

  useEffect(() => {
    const orderedCoffees = coffees.filter((coffee) => coffee.amount > 0);
    setOrderCount(orderedCoffees.length);
  }, [coffees]);

  return (
    <div>
      <Container>
        <Link to="/">
          <img src={logoImg} alt="coffee Delivery" />
        </Link>
        <Links>
          <div className="localisation">
            <img src={imgLocalisation} alt="img localisation" />
            <p>Porto Alegre, Rs</p>
          </div>
          <div className="panier">
            <div className="bulle">
              <span>{orderCount}</span>
            </div>
            <Link to="/order">
              <img src={imgPanier} alt="img du panier" />
            </Link>
          </div>
        </Links>
      </Container>
    </div>
  );
}

 