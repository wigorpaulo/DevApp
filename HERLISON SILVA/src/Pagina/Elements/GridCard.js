import React, { useState } from "react";
import Button from "../../UI/Button";

const GridCard = (props) =>{

    const today = new Date();

    const quitar = (conta) =>{
        const cts = props.Contas.slice()
        var i = cts.findIndex((c) => {return c.id === conta.id})
        cts[i] = {"id":i,"recebedor":conta.recebedor,"pagador":conta.pagador,"criacao":conta.criacao,"quitacao":today.toLocaleDateString(),"valor":parseFloat(conta.valor),"descricao":conta.descricao}
        props.setContas(cts)
    }

    function renderList(){
        return(
            props.dados.map((dado) => {
                return (
                    <li key={dado.id}>
                        Conta a pagar: {dado.id}
                        <ul>
                            <li>Valor: {dado.valor}</li>
                            <li>Recebedor: {dado.recebedor}</li>
                            <li>Pagador: {dado.pagador}</li>
                            <li>Descricao: {dado.descricao}</li>
                            <li>Data cadastro: {dado.criacao}</li>
                            <li>{dado.quitacao === "" ?<Button text="quitar" click={()=> quitar(dado)}/>: "Data quitada: " + dado.quitacao}</li> 
                        </ul>
                    </li>
                )
            })
        )
    }

    return(
        <div className="grid-card">
            <ul>
             {renderList()}
            </ul>
        </div>
    )
}
export default GridCard