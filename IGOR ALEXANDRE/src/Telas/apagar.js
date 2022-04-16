import React from "react";

const Apagar = (props) => {
    function mostralista () {
        const listItems = props.pagar.filter(pagar => pagar.usuario === props.usuario.email).map((pagar) =>
        <ul>
            <li>R$: {parseFloat(pagar.valor)}</li>
            <li>Data: {pagar.data}</li>
            <li>Descrição: {pagar.desc}</li>
            </ul>
      );
      return (
        listItems
      );
    }

return (
   <div className="apagar">
       <h1>Dividas:</h1>
        {
            mostralista ()
        }
    </div>
)

}

export default Apagar