import React, { useState } from "react";
import TextInput from "../UI/TextInput";
import Select from "../UI/Select";

const Adicionar = (props) =>{

    return (
        <div className="adicionar">
            <div className="valor">Valor: <TextInput type="number" value={props.valor} icon="attach_money" placeholder="Valor..." setValue={props.setValor}/></div>
            <div className="user"> {props.type === 1 ? "Pagar para:" : "Receber de:"} <TextInput type="text" value={props.user} icon="person" placeholder="Descricao" setValue={props.setUser}/></div>
            <div className="descricao"> Descricao: <TextInput type="text" value={props.descricao} icon="description" placeholder="Descricao" setValue={props.setDescricao}/></div>
        </div>
    )
}

export default Adicionar