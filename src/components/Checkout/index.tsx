import { useContext } from "react";
import { CoffeeContext, FormContext } from "../../context/CoffeeContext";
import iconLocal from "../../assets/iconLocal.svg";
import iconChrono from "../../assets/iconChrono.svg";
import iconDollard from "../../assets/iconDollardB.svg";
import { Container, CheckoutInfo, InfoOrder, InfoItem, InfoItemDesc } from "./styles";

export function Checkout() {
  const { rua, cidade, bairro, uf } = useContext(FormContext);
  const { modoPagamento } = useContext(CoffeeContext);
  
  return (
    <Container>
      <CheckoutInfo>
        <h2>Uhu! Pedido confirmado</h2>
        <p className="subtitle">Agora é só aguardar que logo o café chegará até você</p>
        <InfoOrder>
          <InfoItem>
            <div className="icon purple">
              <img src={iconLocal} alt="" />
            </div>
            <InfoItemDesc>
              <p>
                Entrega em <span className="rua">{rua}</span>
              </p>
              <p>
                <span className="cidade">{cidade}</span> - <span className="bairro">{bairro}</span>, <span className="uf">{uf}</span>
              </p>
            </InfoItemDesc>
          </InfoItem>
          <InfoItem>
            <div className="icon yellow">
              <img src={iconChrono} alt="" />
            </div>
            <InfoItemDesc>
              <p>Previsão de entrega</p>
              <p>
                <span>20 min - 30 min</span>
              </p>
            </InfoItemDesc>
          </InfoItem>
          <InfoItem>
            <div className="icon orange">
              <img src={iconDollard} alt="" />
            </div>
            <InfoItemDesc>
              <p>Forma de pagamento</p>
              <p>
                <span className="modoPagamento">{modoPagamento}</span>
              </p>
            </InfoItemDesc>
          </InfoItem>
        </InfoOrder>
      </CheckoutInfo>
    </Container>
  );
}
