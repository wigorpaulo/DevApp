import React from "react";
import {Layout} from "../components/Layout";
import "./Home.css"
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const navigate = useNavigate();

    return(
        <Layout>

            <div className="infos">
                <h1 className="login-form-title2">Olivar Neemias</h1>
                <h3 className="login-form-title2">mocolivarbaloi@gmail.com</h3>
                <h3 className="login-form-title2">074.772.341-90</h3>
                <h3 className="login-form-title2">R$ 1000.00</h3>
            </div>

            <div className="container-login-form-btn">
                <button
                    className="login-form-btn"
                    onClick={() => navigate("/pagamento")}>Pagar Conta
                </button>
            </div>

            <div className="container-login-form-btn">
                <button
                    className="login-form-btn"
                    onClick={() => navigate("/receber")}>Receber
                </button>
            </div>

            <div className="container-login-form-btn">
                <button className="login-form-btn">Relatório</button>
            </div>

            <div className="container-login-form-btn">
                <button
                    className="login-form-btn"
                    onClick={() => navigate("/")}>Saír
                </button>
            </div>
        </Layout>
    )
}