import {Container, Links} from "./styles";
import imgLocalisation from "../../assets/Vector-localisation.svg";
import imgPanier from "../../assets/Vector-panier.svg";
import logoImg from "../../assets/Logo.svg"
import { Link } from "react-router-dom";

export function Navbar(){
    return(
      <div>
        <Container>
            <Link to="/">
                <img src={logoImg} alt="coffee Delivery"/>
            </Link>
            <Links>
                <div className="localisation">
                    <img src={imgLocalisation} alt="img localisation" />
                    <p>Porto Alegre, Rs</p>
                </div>
                <div className="panier">
                    <div className="bulle"><span>0</span></div>
                    <Link to="/order">
                        <img src={imgPanier} alt="img du panier" />
                    </Link>
                </div>
            </Links>
        </Container>
      </div>  
    );
}