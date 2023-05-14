import { Coffee } from "../../components/Coffee";
import { Header } from "../../components/Header";
import { Coffees, Container } from "./styles";



export function Home(){
    return(
        <Container>
            <Header/>
            <h2>Nossos cafés</h2>
            <Coffees>
                <Coffee/>
                <Coffee/>
                <Coffee/>
                <Coffee/>
                <Coffee/>
                <Coffee/>
                <Coffee/>
                <Coffee/>
            </Coffees>
        </Container>
    )
}