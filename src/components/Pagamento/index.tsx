import { Container } from "./styles";
import { useContext } from "react";
import imgCarta from "../../assets/iconCarta.svg"
import imgDinheiro from "../../assets/iconDinheiro.svg"
import imgBanco from "../../assets/iconBanco.svg"
import iconDollard from "../../assets/iconFormDollard.svg"
import { CoffeeContext } from "../../context/CoffeeContext";

export function Pagamento(){

      const { setModoPagamento } = useContext(CoffeeContext);

    const handleModoPagamento = (modoPagamento: string) => {
    setModoPagamento(modoPagamento);
  };
  
    return(
        <Container>
            <div className="titre">
                <img src={iconDollard} alt="" />
                <h2>Pagamento</h2>
            </div>
            <p className="desc">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            <div className="tipos-pagamento">
                <div className="btn vibration" onClick={() => handleModoPagamento("Cartão de crédito")}>
                    <img src={imgCarta} alt="" />
                    <p>Cartão de crédito</p>
                </div>
                <div className="btn vibration" onClick={() => handleModoPagamento("Cartão de débito")}>
                    <img src={imgBanco} alt="" />
                    <p>Cartão de débito</p>
                </div>
                <div className="btn vibration" onClick={() => handleModoPagamento("Dinheiro")}>
                    <img src={imgDinheiro} alt="" />
                    <p>Dinheiro</p>
                </div>
            </div>
        </Container>
    )
}