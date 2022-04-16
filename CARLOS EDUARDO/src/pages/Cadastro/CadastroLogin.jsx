import axios from "axios";
import React from "react";
import './cadastro.css'
import { Link, useNavigate } from "react-router-dom";

export default function CadastroLogin(){

    let navigate = useNavigate()
    let[nome, setNome] = React.useState('')
    let[email, setEmail] = React.useState('')
    let[password, setPassword] = React.useState('')

    function submit(e){
        e.preventDefault()
        console.log(nome, email, password)

        axios.post('http://localhost:4000/users',
        { nome: nome, email: email, senha:password }
        )
        .then(resposta =>{
            console.log(resposta)
        })
        
    }

    
    return(
        <>
          <h1 className="cadastrar">Efetue seu Cadastro</h1>  
        <form  onSubmit={submit} method="POST">
            <input onChange={e => {setNome (e.target.value)} } type="text" placeholder="Nome" /> <br />
            <input onChange={e => {setEmail (e.target.value)} } type="email"placeholder="Email" /> <br />
            <input onChange={e => {setPassword (e.target.value)} } type="password" placeholder="Senha" /> <br />
            <button className="cadastrar-btn" type="submit">Cadastrar</button>

        </form>

        <Link to="/" ><button className="cadastro-btn" type="submit">Voltar</button></Link>
        </>
    )
}