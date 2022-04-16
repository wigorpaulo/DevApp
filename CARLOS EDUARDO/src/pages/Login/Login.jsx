import axios from "axios";
import React from "react";
import './style.css'
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";


export default function Login() {

    let navigate = useNavigate()
    let [email, setEmail] = React.useState('')
    let [senha, setSenha] = React.useState('')

    let [message, setMessage] = React.useState('')

    React.useEffect(() => {
        if (localStorage.getItem('email'))
            navigate('home')
    }, [])

    function submit(e) {
        e.preventDefault()
        console.log(email, senha)

        axios.get('http://localhost:4000/users?email=' + email + '&senha=' + senha)
            .then(resp => {
                if (resp.data.length === 1) {
                    setMessage('')
                    localStorage.setItem('email', resp.data[0].email)
                    navigate('/Home')

                } else {
                    setMessage('Email ou Senha incorreto')
                }
            })
    }

    return (
        <>

            <h1>Efetue seu Login</h1>
            <h5 className="message-login">{message}</h5>
            <form onSubmit={submit} method="POST">

                <input onChange={e => {
                    setEmail(e.target.value)
                }} type="email" placeholder="email"/> <br/>

                <input onChange={e => {
                    setSenha(e.target.value)
                }} type="password" placeholder="Senha"/> <br/>

                <button className="entrar-cor" type="submit">Entrar</button>

            </form>

            <Link to="/cadastrar">
                <button className="cadastro-btn" type="submit">Cadastrar</button>
            </Link>

        </>
    )

}

