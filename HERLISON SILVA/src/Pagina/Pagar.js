import React, { useState } from "react";
import Aside from "./Elements/Aside";
import GridCard from "./Elements/GridCard";
import ListCard from "./Elements/ListCard";
import Adicionar from "./Adicionar";

const Pagar = (props) =>{
    const [viewType, setViewType] = useState (true)

    const [add, setAdd] = useState(false)

    const [newValor, setNewValor] = useState(0)
    const [newUser, setNewUser] = useState("")
    const [newDescricao, setNewDescricao] = useState("")

    const today = new Date();

    function showItens (){
        if(viewType){
            return <GridCard setContas={props.setContas} Contas={props.Contas} dados={props.Contas.filter((conta) => { return conta.pagador === props.User})}/>
        }else{
            return <ListCard setContas={props.setContas} Contas={props.Contas} dados={props.Contas.filter((conta) => { return conta.pagador === props.User})}/>
        }
    }

    const addNewConta = () =>{
        if(add){
            if(newValor > 0){
                if(newUser !== ""){
                    var index = props.Contas.length
                    props.Add({"id":index,"recebedor":newUser,"pagador":props.User,"criacao":today.toLocaleDateString(),"quitacao":"","valor":parseFloat(newValor),"descricao":newDescricao})
                    setAdd(!add)
                }else{
                    console.log("Digite um usuário")
                }
            }else{
                console.log("Digite um valor maior que zero.")
            }
        }else{
            setAdd(!add)
        }
    }

    return(
        <div className="pagar">
            <Aside type={viewType} setViewType={setViewType} add={add} addConta={addNewConta}/>
            {add ? <Adicionar valor={newValor} user={newUser} descricao={newDescricao} setValor={setNewValor} setUser={setNewUser} setDescricao = {setNewDescricao} type = {1}/> : showItens()}
        </div>
    )
}

export default Pagar