import { Form } from "../../components/Form"
import { Pagamento } from "../../components/Pagamento"
import { ResumePedido } from "../../components/ResumePedido"
import { Container, Left, Right } from "./styles"


export function Order(){
    return(
        <Container>
            <Left>
                <Form/>
                <Pagamento/>
            </Left>
            <Right>
                <ResumePedido/>
            </Right>
        </Container>
    )
}