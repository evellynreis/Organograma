import { useState } from "react";
import "./CampoTexto.css";

function CampoTexto(props) {
  const placeholderModificada = `${props.placeholder}...`;

  // let valor = "Jade";
  const [valor, setValor] = useState('');

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
}

export default CampoTexto;
