import {Card, Container, Content, Info, Left, Pagamento, Right, Submit, Totals, Trasso} from "./styles";
import iconLocalisation from "../../assets/iconFormLocalisation.svg"
import imgCarta from "../../assets/iconCarta.svg"
import imgDinheiro from "../../assets/iconDinheiro.svg"
import imgBanco from "../../assets/iconBanco.svg"
import iconDollard from "../../assets/iconFormDollard.svg"
import imgCoffee from "../../assets/expressoTradicional.png"
import iconSub from "../../assets/iconSub.svg"
import iconDelete from "../../assets/iconDelete.svg"
import iconAdd from "../../assets/iconAdd.svg"
import { Link } from "react-router-dom";


export function Form(){
    return(
        <Container>
            <Left>
                <h2>Complete seu pedido</h2>
                <Info>
                    <div className="a titre">
                        <img src={iconLocalisation} alt="" />
                        <h2>Endereço de Entrega</h2>
                    </div>
                    <p className="desc">Informe o endereço onde deseja receber seu pedido</p>
                    <form>
                        <input className="input-cep" type="text" placeholder="CEP"/>
                        <input className="input-rua" type="text" placeholder="Rua"/>
                        <input className="input-numero" type="tel" placeholder="Número"/>
                        <input className="input-bairro" type="text" placeholder="Bairro"/>
                        <input className="input-cidade" type="text" placeholder="Cidade"/>
                        <input className="input-uf" type="text" placeholder="UF"/>
                    </form>
                </Info>
                <Pagamento>
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
                </Pagamento>
            </Left>
            <Right>
                <h2>Resumo do pedido</h2>
                <Card>
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

                    <Totals>
                        <div className="line">
                            <p>Total de itens</p>
                            <p>RS <span>29,70</span></p>
                        </div>
                        <div className="line">
                            <p>Total de Entrega</p>
                            <p>RS <span>9,90</span></p>
                        </div>
                        <div className="line total">
                            <p>Total</p>
                            <p>RS<span>   39,70</span></p>
                        </div>
                    </Totals>

                    <Submit>
                        <Link to="/delivery">
                            <p>CONFIRMAR PEDIDO</p>
                        </Link>
                    </Submit>
                </Card>
            </Right>
            
            
        </Container>
    )
}