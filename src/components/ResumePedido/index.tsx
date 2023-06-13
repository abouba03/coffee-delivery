import { Link } from "react-router-dom";
import { Card, Container, Submit, Totals} from "./styles";
import { ItemOrderedCoffee } from "../ItemOrderedCoffee";
import React, { useContext, useEffect } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";



export function ResumePedido() {
  const { coffees } = useContext(CoffeeContext);

  useEffect(() => {
    // Mettez à jour les valeurs ici si nécessaire
  }, [coffees]);

  const sumPedido = coffees
    .filter((coffee) => coffee.amount > 0)
    .reduce((sum, coffee) => sum + coffee.amount * coffee.price, 0);

  const entregaPedido = 9.9;

  const totalPedido = sumPedido + entregaPedido;

  return (
    <Container>
      <h2>Resumo do pedido</h2>
      <Card>
        <ItemOrderedCoffee/>
        <Totals>
          <div className="line">
            <p>Total de itens</p>
            <p className="sumPedido"><span>{sumPedido.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}</span></p>
          </div>
          <div className="line">
            <p>Total de Entrega</p>
            <p className="entregaPedido"><span>{entregaPedido.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}</span></p>
          </div>
          <div className="line total">
            <p>Total</p>
            <p className="totalPedido"><span>{totalPedido.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}</span></p>
          </div>
        </Totals>
        <Submit>
            <Link to="/delivery">
                <p>CONFIRMAR PEDIDO</p>
            </Link>
        </Submit>
      </Card>
    </Container>
  );
}
