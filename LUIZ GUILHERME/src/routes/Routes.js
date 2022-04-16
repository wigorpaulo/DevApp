import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "../pages/login"
import Register from "../pages/register"
import Home from "../pages/home"
import ContasPagar from "../pages/contasPagar"
import ContasReceber from "../pages/contasReceber"
import Extrato from "../pages/extrato"

export default function ApplicationRoutes(){
    return(
        <BrowserRouter>
        <Routes>
        <Route exact path="/login" element = {<Login/>}/>
        <Route exact path="/" element = {<Login/>}/>
        <Route exact path="/register" element = {<Register/>}/>
        <Route exact path="/home" element = {<Home/>}/>
        <Route exact path="/contasPagar" element={<ContasPagar/>}/>
        <Route exact path="/contasReceber" element={<ContasReceber/>}/>
        <Route exact path="/extrato" element={<Extrato/>}/>

        </Routes>
        </BrowserRouter>
    );
}