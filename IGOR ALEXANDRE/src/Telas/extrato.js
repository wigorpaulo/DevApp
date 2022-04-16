import React from "react";
import Apagar from "./apagar";
import Areceber from "./areceber";

const Extrato = (props) => {
return (
    <div className="extrato">
     <h1>Extrato:</h1>
        <div>
            <Apagar pagar = {props.pagar} usuario={props.usuario}/>
        </div>
        <div>
            <Areceber receber = {props.receber} usuario={props.usuario}/>
        </div>
    </div>
)

}

export default Extrato