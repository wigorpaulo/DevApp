import React, { useState } from "react";

const Add = (props) => {
const [novovalor, setNovovalor] = useState(0)
const [descricao, setDescricao] = useState("")

function Inserir () {
    if (novovalor > 0) {
        var select = document.getElementById('tipo');
	    var value = select.options[select.selectedIndex].value;
   if(value === "pagar")
        props.pagar({"valor":novovalor,"data":"02/04/2022","usuario":props.usuario.email,"desc":descricao,"paga":false})
        else
        props.receber({"valor":novovalor,"data":"02/04/2022","usuario":props.usuario.email,"desc":descricao,"recebida":false})
    }
}

return(
    <div className="add">
        <input placeholder="valor" type="number" onChange={e=>setNovovalor(e.target.value)} value ={novovalor}></input>
        <input placeholder="decricao" type="text" onChange={e=>setDescricao(e.target.value)} value ={descricao}></input>
        <select id="tipo">
            <option value="pagar">Pagar</option>
            <option value="receber">Receber</option>
        </select>
        <button onClick={()=>Inserir()}>Inserir</button>
    </div>
)

}
export default Add