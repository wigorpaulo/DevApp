import React, { Component, useState } from "react";
import "./stlyeContasPagar.css"
import Logo1 from "../../img/lontraLogo2.png"
import { Link } from "react-router-dom";

const App = () => {
    const [valor, setValor] = useState("")
    const [descricao, setDescricao] = useState("")
    return (
        <div className="container">
            <div className="container-ContasPagar">
                <div className="wrap-ContasPagar">
                    <span className="contasPagar-title">
                        <img src={Logo1} className="logo-ContasPagar" />
                        Pagar
                    </span>
                    <div className="wrap-input-ContasPagar">
                        <input className={valor !== "" ? "has-val input-ContasPagar" : "input-ContasPagar"} type="valor" value={valor} onChange={e => setValor(e.target.value)} />
                        <span className="focus-input-ContasPagar" data-placeholder="Valor" />
                    </div>
                    <div className="wrap-input-ContasPagar">
                        <input className={descricao !== "" ? "has-val input-ContasPagarDesc" : "input-ContasPagarDesc"} type={"descricao"} value={descricao} onChange={e => setDescricao(e.target.value)} />
                        <span className="focus-input-ContasPagar" data-placeholder="Descrição" />
                    </div>
                    <div className="container-button-0-ContasPagar">
                        <button className="container-button" > Registrar</button>
                        <Link to="/home" className="linkButtContaPagar"><button className="container-button"> Voltar </button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;