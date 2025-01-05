import "./CampoTexto.css";
function CampoTexto(props) {
  const placeholderModificada = `${props.placeholder}...`;

  let valor = "Jade";

  const aoDigitado = (evento) => {
    valor = evento.target.value;
    console.log(valor);
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
