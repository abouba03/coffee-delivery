import { Checkout } from "../../components/Checkout";
import { Container } from "./styles";
import imgDelivery from "../../assets/imgDelivery.png"



export function Delivery(){
    return(
        <Container>
            <Checkout/>
            <img className="imgDelivery" src={imgDelivery} alt="" />
        </Container>
    )
}