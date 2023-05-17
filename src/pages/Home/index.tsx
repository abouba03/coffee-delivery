import { CoffeeList } from "../../components/Coffee";
import { Header } from "../../components/Header";
import { Coffees, Container } from "./styles";



export function Home(){
    return(
        <Container>
            <Header/>
            <h2>Nossos cafés</h2>
            <Coffees>
                <CoffeeList/>
            </Coffees>
        </Container>
    )
}