import React, { useState } from "react";
import "./stlyeContasReceber.css"
import Logo1 from "../../img/lontraLogo2.png"
import { Link } from "react-router-dom";
const App = () =>{
    const[valor, setValor] = useState("")
    const[descricao,setDescricao] = useState("")
    return(
        <div className="container">
            <div className="container-ContasReceber">
                <div className="wrap-ContasReceber">
                    <span className="contasReceber-title">
                        <img src={Logo1} className="logo-ContasReceber"/>
                        Receber
                    </span>
                    <div className="wrap-input-ContasReceber">
                        <input className={valor !== "" ? "has-val input-ContasReceber" : "input-ContasReceber"} type="valor" value={valor} onChange={e => setValor(e.target.value)} />
                        <span className="focus-input-ContasReceber"  data-placeholder="Valor"/>
                    </div>
                    
                    <div className="wrap-input-ContasReceber">
                        <input className={descricao !== "" ? "has-val input-ContasReceberDesc":"input-ContasReceberDesc"} type={"descricao"} value={descricao} onChange={e => setDescricao(e.target.value)}/>
                        <span className="focus-input-ContasReceber" data-placeholder="Descrição"/>
                    </div>
                    <div className="container-button-0-contasReceber">
                        <button className="container-button-receber"> Registrar</button>
                        <Link to="/home" className="linkButtContaReceber"><button className="container-button-receber"> Voltar </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;