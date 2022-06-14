import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import Login from "../pages/login"
import Cadastro from "../pages/register"
import Conta1 from "../pages/contasPagar"
import Home from "../pages/pag1"
import Extrato from "../pages/extrato"
import Conta2 from "../pages/contasReceber"

export default function ApplicationRoutes(){
    return(

        <Router>
        <Routes>
        <Route exact path="" element = {<Login/>}/>
        <Route exact path="/Cadastro" element = {<Cadastro/>}/>
        <Route exact path="/contasPagar" element = {<Conta1/>}/>
        <Route exact path="/home" element = {<Home/>}/>
        <Route exact path="/extrato" element = {<Extrato/>}/>
        <Route exact path="/contasReceber" element = {<Conta2/>}/>

        </Routes>
        </Router>
    );
}