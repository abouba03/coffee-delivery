import { useContext } from "react";
import { FormContext } from "../../context/CoffeeContext";
import { Container, Info } from "./styles";
import iconLocalisation from "../../assets/iconFormLocalisation.svg";

export function Form() {
  const { rua, cidade, bairro, uf, setRua, setCidade, setBairro, setUf } = useContext(FormContext);

  return (
    <Container>
      <h2>Complete seu pedido</h2>
      <Info>
        <div className="a titre">
          <img src={iconLocalisation} alt="" />
          <h2>Endereço de Entrega</h2>
        </div>
        <p className="desc">Informe o endereço onde deseja receber seu pedido</p>
        <form>
          <input className="input-cep" type="text" placeholder="CEP" />
          <input className="input-rua" type="text" placeholder="Rua" value={rua} onChange={(e) => setRua(e.target.value)} />
          <input className="input-numero" type="tel" placeholder="Número" />
          <input className="input-bairro" type="text" placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
          <input className="input-cidade" type="text" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
          <input className="input-uf" type="text" placeholder="UF" value={uf} onChange={(e) => setUf(e.target.value)} />
        </form>
      </Info>
    </Container>
  );
}
