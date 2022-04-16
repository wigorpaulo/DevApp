
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Componentes/Home/Home";
import Login from "./Componentes/Login/Login";
import Cadastro from "./Componentes/Cadastro/Cadastro";
import Debito from "./Componentes/Debito/Debito";
import Credito from "./Componentes/Credito/Credito";
import Transactions from "./Componentes/Transacoes/Transacoes";

const loggedIn = true;
const Rotas = (props) => {
   return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Login logar={props.logar} isLoggedIn={props.isLoggedIn}/>}/>
            <Route path="/cadastro" element={<Cadastro registrar={props.registrar}/>} />
            <Route path="/home" element={<Home isLoggedIn={props.isLoggedIn} balance={props.balance}/>}/>
            <Route path="/debito" element={<Debito isLoggedIn={props.isLoggedIn} addTransaction={props.addTransaction} balance={props.balance}/>}/>
            <Route path="/credito" element={<Credito isLoggedIn={props.isLoggedIn} addTransaction={props.addTransaction} balance={props.balance}/>}/>     
            <Route path="/transacoes" element={<Transactions isLoggedIn={props.isLoggedIn} transactions={props.transactions}/>}/>
        </Routes>
    </BrowserRouter>
   )
}
const linksDictionary = {
    Debito: "/debito",
    Credito: "/credito",
    transactions: "/transacoes",
    Cadastro: "/cadastro",
    Home: "/home",
}

export { Rotas, linksDictionary}; 