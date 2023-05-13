import { Container, Items, Main} from "./styles";
import iconPanier from "../../assets/iconPanier.svg";
import iconChrono from "../../assets/iconChrono.svg";
import iconEmballage from "../../assets/iconEmballage.svg";
import iconTasse from "../../assets/iconTasse.svg";
import imgHeader from "../../assets/imgHeader.png";

export function Header(){
    return(
        <Container>
            <Main>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p className="subtitle">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <Items>
                    <div className="item ">
                        <div className="itemImg item1">
                            <img src={iconPanier} alt="" />
                        </div>
                        <p>Compra simples e segura</p>
                    </div>
                    <div className="item ">
                        <div className="itemImg item2">
                            <img src={iconEmballage} alt="" />
                        </div>
                        <p>Embalagem mantém o café intacto</p>
                    </div>
                    <div className="item ">
                        <div className="itemImg item3">
                            <img src={iconChrono} alt="" />
                        </div>
                        <p>Entrega rápida e rastreada</p>
                    </div>
                    <div className="item ">
                        <div className="itemImg item4">
                            <img src={iconTasse} alt="" />
                        </div>
                        <p>O café chega fresquinho até você</p>
                    </div>
                </Items>  
            </Main>
            <img className="imgHeader" src={imgHeader} alt="img du coffee" />
            

        </Container>
    )
}