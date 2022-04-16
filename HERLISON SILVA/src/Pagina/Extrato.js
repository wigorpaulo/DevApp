import React from "react";
import ListCard from "./Elements/ListCard";

const Extrato = (props) =>{
    function totalContas(){
        var Pagar = 0
        var Pagas = 0
        var Receber = 0
        var Recebidas = 0
        props.Contas.filter((conta) => { return (conta.recebedor === props.User || conta.pagador === props.User)}).map((conta) =>{
            if(conta.pagador === props.User && conta.quitacao === ""){
                Pagar = Pagar + parseFloat(conta.valor)
            }else if(conta.pagador === props.User && conta.quitacao !== ""){
                Pagas = Pagas + parseFloat(conta.valor)
            }else if(conta.recebedor === props.User && conta.quitacao !== ""){
                Recebidas = Recebidas + parseFloat(conta.valor)
            }else if (conta.recebedor === props.User && conta.quitacao === ""){
                Receber = Receber + parseFloat(conta.valor)
            }

            return ""
        })

        return(<>
            <h2>Total de contas a pagar: {Pagar}</h2>
            <h2>Total de contas a receber: {Receber}</h2>
            <h2>Saldo atual: {Recebidas - Pagas}</h2>
            <h2>Saldo previsto: {(Recebidas - Pagas) + (Receber - Pagar)}</h2>
        </>)
    }
    function storyContas(){
        return <ListCard dados ={props.Contas.filter((conta) => { return (conta.recebedor === props.User || conta.pagador === props.User)})}/>
    }

    return(
        <div className="extrato">
            <h1>Extrato</h1>
            {storyContas()}
            {totalContas()}
        </div>
    )
}

export default Extrato