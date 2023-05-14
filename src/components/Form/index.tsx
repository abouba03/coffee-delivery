import {Container, Info} from "./styles";
import iconLocalisation from "../../assets/iconFormLocalisation.svg"




export function Form(){
    return(
        <Container>
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
        </Container>
    )
}