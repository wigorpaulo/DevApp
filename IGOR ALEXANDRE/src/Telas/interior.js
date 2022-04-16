import React, { useState } from "react";
import Apagar from "./apagar";
import Areceber from "./areceber";
import Extrato from "./extrato";
import Add from "./add";

const Interior = (props) => {
const[verext, setVerext] = useState(false)
const[pagar, setApagar] = useState([{"valor":0,"data":"","usuario":"","desc":"","paga":false}])
const[receber, setReceber] = useState([props.iniciaSaldo])
const Inserirapagar = (c) => {
    pagar.push(c)
}
const Inserireceber = (c) => {
    receber.push(c)
}
const deslogar = () => {
    props.deslogar()
}
function direitaext () {
    var totalapagar = 0.0
    var totalareceber = 0.0
    var totalpagas = 0.0
    var totalrecebidas = 0.0
    pagar.map((pagar)=>{
        if(!pagar.paga)
        totalapagar = parseFloat(totalapagar) + parseFloat(pagar.valor)
        else
        totalpagas = totalpagas + pagar.valor
    })
    receber.map((receber)=>{
        if(!receber.recebida)
        totalareceber = parseFloat(totalareceber) + parseFloat(receber.valor)
        else
        totalrecebidas = parseFloat(totalrecebidas) + parseFloat(receber.valor)
    })
    return (
    <>
    <div className="resultados">
        <h3>Contas a Pagar: {totalapagar}</h3>
       <h3>Contas a Receber: {totalareceber} </h3>
       <h2>Total: {totalareceber - totalapagar}</h2>
       <h3>Contas Recebidas: {totalrecebidas}</h3>
       <h3>Contas Pagas: {totalpagas}</h3>
       <h2>Saldo: {totalrecebidas - totalpagas}</h2>
    </div>
        <Add receber={Inserireceber} pagar={Inserirapagar} usuario={props.usuario}/>
    </>)
}
return (
    <div className="dentro">
        <div className="esquerda">
            <div className="botoes">
                <button onClick={()=> setVerext(false)}>Contas</button>

                <button onClick={()=> setVerext(true)}>Extrato</button>

                <button onClick={()=> deslogar()}>Sair</button>

            </div>
            {
                verext ? <Extrato pagar = {pagar} usuario={props.usuario} receber = {receber}/> : <Apagar pagar = {pagar} usuario={props.usuario} setPagar={setApagar}/>
            }
        </div>

        <div className="direita">
            <div className="cabeca">
            <h1>{props.usuario.email}</h1>
            <span className="material-icons">
                     person_outline
             </span>
             </div>
             {
                 verext ? direitaext() : <Areceber receber = {receber} usuario={props.usuario} setAreceber={setReceber}/>
             }
        </div>
    </div>)
}

export default Interior