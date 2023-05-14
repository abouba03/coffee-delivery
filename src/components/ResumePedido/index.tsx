import { Link } from "react-router-dom";
import { Card, Container, Submit, Totals} from "./styles";
import { ItemOrderedCoffee } from "../ItemOrderedCoffee";




export function ResumePedido(){
    return(
        <Container>
            <h2>Resumo do pedido</h2>
                <Card>
                    <ItemOrderedCoffee/>
                    

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
        </Container>
    )
}