import iconLocal from "../../assets/iconLocal.svg"
import iconChrono from "../../assets/iconChrono.svg"
import iconDollard from "../../assets/iconDollardB.svg"
import imgDelivery from "../../assets/imgDelivery.png"
import { Container, CheckoutInfo, InfoOrder, InfoItem, InfoItemDesc } from "./styles"

export function Checkout(){
    return(
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
                            <p>Entrega em <span>Rua João Daniel Martinelli, 102</span></p>
                            <p>Farrapos - Porto Alegre, RS</p>
                        </InfoItemDesc>
                    </InfoItem>
                    <InfoItem>
                        
                        <div className="icon yellow">
                            <img src={iconChrono} alt="" />
                        </div>
                        <InfoItemDesc>
                            <p>Previsão de entrega</p>
                            <p><span>20 min - 30 min</span></p>
                        </InfoItemDesc>
                    </InfoItem>
                    <InfoItem>
                        <div className="icon orange">
                            <img src={iconDollard} alt="" />
                        </div>
                        <InfoItemDesc>
                            <p>Pagamento na entrega </p>
                            <p><span>Cartão de Crédito</span></p>
                        </InfoItemDesc>
                    </InfoItem>
                </InfoOrder>
            </CheckoutInfo>
            <img className="imgDelivery" src={imgDelivery} alt="" />
        </Container>
    )
}