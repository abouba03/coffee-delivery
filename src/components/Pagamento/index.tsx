import { Container } from "./styles";
import imgCarta from "../../assets/iconCarta.svg"
import imgDinheiro from "../../assets/iconDinheiro.svg"
import imgBanco from "../../assets/iconBanco.svg"
import iconDollard from "../../assets/iconFormDollard.svg"

export function Pagamento(){
    return(
        <Container>
            <div className="titre">
                <img src={iconDollard} alt="" />
                <h2>Pagamento</h2>
            </div>
            <p className="desc">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            <div className="tipos-pagamento">
                <div className="btn vibration">
                    <img src={imgCarta} alt="" />
                    <p>Cartão de crédito</p>
                </div>
                <div className="btn vibration">
                    <img src={imgBanco} alt="" />
                    <p>cartão de débito</p>
                </div>
                <div className="btn vibration">
                    <img src={imgDinheiro} alt="" />
                    <p>dinheiro</p>
                </div>
            </div>
        </Container>
    )
}