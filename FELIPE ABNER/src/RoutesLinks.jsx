
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./componentes/core/mainPage/mainPage.component";
import Login from "./componentes/auth/login/login.component";
import Register from "./componentes/auth/register/register.component";
import PaymentSend from "./componentes/core/paymentSend/paymentSend.component";
import PaymentReceive from "./componentes/core/paymentReceive/paymentReceive.component";
import Transactions from "./componentes/core/transactions/transactions.component";

const loggedIn = true;
const RoutesLinks = (props) => {
   return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Login logar={props.logar} isLoggedIn={props.isLoggedIn}/>}/>
            <Route path="/register" element={<Register registrar={props.registrar}/>} />
            <Route path="/app" element={<MainPage isLoggedIn={props.isLoggedIn} balance={props.balance}/>}/>
            <Route path="/app/payment/send" element={<PaymentSend isLoggedIn={props.isLoggedIn} addTransaction={props.addTransaction} balance={props.balance}/>}/>
            <Route path="/app/payment/receive" element={<PaymentReceive isLoggedIn={props.isLoggedIn} addTransaction={props.addTransaction} balance={props.balance}/>}/>
            <Route path="/app/transactions/list" element={<Transactions isLoggedIn={props.isLoggedIn} transactions={props.transactions}/>}/>
        </Routes>
    </BrowserRouter>
   )
}
const linksDictionary = {
    paymentSend: "/app/payment/send",
    paymentReceive: "/app/payment/receive",
    transactions: "/app/transactions/list",
    register: "/register",
    mainPage: "/app",
}

export { RoutesLinks, linksDictionary}; 