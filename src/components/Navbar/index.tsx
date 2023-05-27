import { Container, Links } from "./styles";
import imgLocalisation from "../../assets/Vector-localisation.svg";
import imgPanier from "../../assets/Vector-panier.svg";
import logoImg from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface Coffee {
  id: number;
  avatar: string;
  description: string;
  name: string;
  price: number;
  amount: number;
}

export function Navbar() {
  const [orderCount, setOrderCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(fetchOrderCount, 1000); // Interroger toutes les 5 secondes

    return () => {
      clearInterval(interval);
    };
  }, []);

  async function fetchOrderCount() {
    try {
      const response = await axios.get<Coffee[]>("http://localhost:3001/coffees");
      const orderedCoffees = response.data.filter((coffee) => coffee.amount > 0);
      setOrderCount(orderedCoffees.length);
    } catch (error) {
      console.error("Erreur lors de la récupération du nombre de commandes :", error);
    }
  }

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
