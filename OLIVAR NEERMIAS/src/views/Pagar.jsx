import React, {useState} from "react";
import {Layout} from "../components/Layout";
import { useNavigate } from 'react-router-dom';

export const PagarView = () => {

    const [valor, setValor] = useState("")
    const [descricao, setDescricao] = useState("")

    const navigate = useNavigate();

    return (
        <Layout>
            <div className="wrap-input">
                <input
                    className={valor !== "" ? 'has-val input' : 'input'}
                    type="double"
                    value={valor}
                    onChange={e => setValor(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Valor"></span>
            </div>

            <div className="wrap-input">
                <input
                    className={descricao !== "" ? 'has-val input' : 'input'}
                    type="string"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Descriçao"></span>
            </div>

            <div className="container-login-form-btn">
                <button
                    className="login-form-btn"
                    onClick={() => navigate("/home")}>Pagar
                </button>
            </div>
        </Layout>
    )
}