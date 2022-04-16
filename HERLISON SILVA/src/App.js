import React, { useState } from "react";
import {Route, Routes, useNavigate} from 'react-router-dom' 
import Footer from "./Pagina/Elements/Footer";
import Profile from "./Pagina/Profile";
import Login from "./Pagina/Login"
import Register from "./Pagina/Register"
import Pagar from "./Pagina/Pagar";
import Receber from "./Pagina/Receber";
import Extrato from "./Pagina/Extrato";
import Home from "./Pagina/Home";

function App() {

  const [User, setUser] = useState("")
  const [Users, setUsers] = useState([{"user":"root","email":"","senha":"root"}])
  const [Contas, setContas] = useState([])
  const [valited, setValited] = useState(false)

  let redirect = useNavigate();

  const login = () =>{
    console.log(User)
    setValited(true)
    redirect("/profile/" + User)
  }

  const logout = () =>{
    setUser("")
    setValited(false)
    alterRegisterLogin(true)
 }

  const register = (usr) =>{
    Users.push(usr)
  }

  const addConta = (ct) =>{
    Contas.push(ct)
  }

  const viewContas = (t) =>{
    if(valited){
      if(t===1){
        redirect("/pagar")
      }
      else if(t === 2){
        redirect("/receber")
      }else{
        redirect("/extrato")
      }
    }else{
      alert("Faça login antes de acessar")
      redirect("/login")
    }
  }

  const alterRegisterLogin = (t) =>{
    if(t)
    redirect("/login")
    else
    redirect("/register")
  }

  function profileRoutes(){
      return Users.map((usr) => {
        return <Route path={"/profile/" + usr.user} element={<Profile User={User} Contas={Contas} Users = {Users}/>}/>
      })
  }

  function loadNavLinks(){ 
    if(!valited){
    return(
        <>
            <li onClick={() => redirect("/")}>Home</li>
            <li onClick={() => viewContas(1)}>Pagar</li>
            <li onClick={() => viewContas(2)}>Receber</li>
            <li onClick={() => viewContas(3)}>Extrato</li>
            <li onClick={() => alterRegisterLogin(true)}>Entrar</li>
            <li onClick={() => alterRegisterLogin(false)}>Cadastrar</li>
        </>)
    }
    else{
        return(
        <>
            <li onClick={() => redirect("/")}>Home</li>
            <li onClick={() => redirect("/profile/" + User)}>Profile</li>
            <li onClick={() => viewContas(1)}>Pagar</li>
            <li onClick={() => viewContas(2)}>Receber</li>
            <li onClick={() => viewContas(3)}>Extrato</li>
            <li onClick={() => logout()}>Sair</li>
        </>)
    }
}

  return (
    <div className="App">
      <header>
        <img src="https://i.postimg.cc/VNxjZD1T/3.png" alt="Coin Change"/>
        <nav>
          <ul>
              {loadNavLinks()}
          </ul>
        </nav>
      </header>
      <Routes>
        {profileRoutes()}
        <Route path="/login" element={<Login login = {login} Users = {Users} loginRegister = {alterRegisterLogin} setUser={setUser}/>}/>
        <Route path="/register" element={<Register register = {register} Users = {Users} loginRegister = {alterRegisterLogin} Add={addConta}/>}/>
        <Route path="/pagar" element={<Pagar User = {User} Users = {Users} Contas = {Contas} Add={addConta} setContas={setContas}/>}/>
        <Route path="/receber" element={<Receber User = {User} Users = {Users} Contas = {Contas} Add={addConta} setContas={setContas}/>}/>
        <Route path="/extrato" element={<Extrato User = {User} Users = {Users} Contas = {Contas} Add={addConta} setContas={setContas}/>}/>
        <Route path="/" element={<Home User = {User} Users = {Users} Contas = {Contas}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
