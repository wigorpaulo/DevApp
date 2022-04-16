import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from "./pages/Login/Login";
import CadastroLogin from "./pages/Cadastro/CadastroLogin";
import Home from "./pages/Menu/Home";
import Saldo from "./pages/Saldo/Saldo";
import Despesas from "./pages/Despesas/Despesas";
import Extratos from "./pages/Extratos/Extratos";


const PrivateRoute = ({ children }) => {
    let isAuthenticated

    localStorage.getItem('email') ?
        isAuthenticated = true
        :
        isAuthenticated = false

    return isAuthenticated ?
        children
        :
        <Navigate to='/' />
}

export default function MinhasRotas(){
    return(
        <BrowserRouter>
        
        <Routes>
            {/*Publicas*/}
            <Route path="/" element = {<Login/>} />
            <Route path="/cadastrar" element = {<CadastroLogin/>}/>
           

            {/*Privadas*/}
            <Route 
                path="/home"
                element={
                <PrivateRoute>
                    <Home/>
                </PrivateRoute>
            }/>

            <Route 
            path="/saldo"
            element={
                <PrivateRoute>
                    <Saldo/>
                </PrivateRoute>}/>

           
            <Route 
            path="/despesas"
            element={<PrivateRoute>
                <Despesas/> 
                </PrivateRoute>}/>  

                <Route 
            path="/extratos"
            element={
                <PrivateRoute>
                    <Extratos/>
                </PrivateRoute>}/>
 

        </Routes>

                
        
            
        </BrowserRouter>
     
    )
}