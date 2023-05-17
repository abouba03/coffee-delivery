import {Container, Card} from "./styles"
import expressoTradicional from "../../assets/expressoTradicional.png";
import iconAdd from "../../assets/iconAdd.svg";
import iconSub from "../../assets/iconSub.svg";
import iconPanier from "../../assets/iconPanier.svg";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { api } from "../../service/api";


interface Coffee {
    id: number;
    avatar: string;
    description: string;
    name: string;
    price: number;
    amount:number
};


export function CoffeeList(){


    const [coffees, setCoffees] = useState<Coffee[]>([]);


    useEffect(() => {
        async function loadCoffees() {
          await api.get('/coffees')
            .then(response => setCoffees(response.data))
        }
    
        loadCoffees();
      }, []);

    return(
        <Container>
            {
                coffees.map(coffee=>(
                    <li>
                        <Card key={coffee.id}>
                            <img className="imgCard" src={expressoTradicional} alt="" />
                            <div className="content">
                                <div className="type">
                                    <p>TRADICIONAL</p>
                                </div>
                                <h1>{coffee.name}</h1>
                                <p className="description">{coffee.description}</p>
                                <div className="details">
                                    <p>RS<span> {coffee.price}</span></p>
                                    <div className="achat">
                                        <div className="counter">
                                            <img className="icon" src={iconSub} alt="iconAdd" />
                                            <span>{coffee.amount}</span>
                                            <img className="icon" src={iconAdd} alt="iconSub" />
                                        </div>
                                        <div className="panier">
                                            <img  className="icon" src={iconPanier} alt="" />
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        </Card>
                    </li>
                ))
            }
                
                
        </Container>
    )
}