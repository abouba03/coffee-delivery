

import imgCoffee from "../../assets/expressoTradicional.png";
import iconSub from "../../assets/iconSub.svg";
import iconDelete from "../../assets/iconDelete.svg";
import iconAdd from "../../assets/iconAdd.svg";
import { Container, Content, Trasso } from "./styles";



export function ItemOrderedCoffee(){
    return(
        <Container>
                <Content>
                        <img className="imgCoffee" src={imgCoffee} alt="" />
                        <div className="card-info">
                            <p>Expresso </p>
                            <div className="zoneUpdate">
                                <div className="counter">
                                    <img className="icon" src={iconSub} alt="iconAdd" />
                                    <span>1</span>
                                    <img className="icon" src={iconAdd} alt="iconSub" />
                                </div>
                                <div className="delete-btn">
                                    <img className="icon" src={iconDelete} alt="" />
                                    <p>REMOVER</p>
                                </div>
                            </div>
                        </div>
                        <p className="preco">RS <span>9,90</span></p>          
                    </Content>
                    <Trasso></Trasso>
        </Container>
    )
}