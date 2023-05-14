import {Container, Card} from "./styles"
import expressoTradicional from "../../assets/expressoTradicional.png";
import iconAdd from "../../assets/iconAdd.svg";
import iconSub from "../../assets/iconSub.svg";
import iconPanier from "../../assets/iconPanier.svg";
import "aos/dist/aos.css";
export function Coffee(){

    return(
        <Container>
                <Card>
                    <img className="imgCard" src={expressoTradicional} alt="" />
                    <div className="content">
                        <div className="type">
                            <p>tradicional</p>
                        </div>
                        <h1>Expresso Tradicional</h1>
                        <p className="description">O tradicional café feito com água quente e grãos moídos</p>
                        <div className="details">
                            <p>RS<span>  9.90</span></p>
                            <div className="achat">
                                <div className="counter">
                                    <img className="icon" src={iconSub} alt="iconAdd" />
                                    <span>1</span>
                                    <img className="icon" src={iconAdd} alt="iconSub" />
                                </div>
                                <div className="panier">
                                    <img  className="icon" src={iconPanier} alt="" />
                                </div>
                            </div>   
                        </div>
                    </div>
                </Card>
                
        </Container>
    )
}