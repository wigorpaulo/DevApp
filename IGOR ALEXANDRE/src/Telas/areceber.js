import React from "react";

const Areceber = (props) => {
    function mostralista () {
        const listItems = props.receber.filter(receber => receber.usuario === props.usuario.email).map((receber) =>
        <ul>
            <li>RS: {parseFloat(receber.valor)}</li>
            <li>Data: {receber.data}</li>
            <li>Descrição: {receber.desc}</li>
            </ul>
      );
      return (
        listItems
      );
    }
return (
    <div className="areceber">
        <h1>Ganhos:</h1>
         {
            mostralista ()
        }
    </div>
)

}

export default Areceber