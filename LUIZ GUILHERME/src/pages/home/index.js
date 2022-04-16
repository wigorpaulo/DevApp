import React from "react";
import "./styleHome.css"
import Logo from "../../img/lontraLogo2.png"
import {Link} from "react-router-dom"

const App = () =>{
    return(
        <div className="container">
            <div className="container-home">
                <div className="wrap-home">
                    <span className="home-title">
                        Home
                        <img src={Logo} className="logo-home"/>
                    </span>

                <div className="container-button-1-home"> 
                    <button className="home-button"><Link to="/contasPagar" className="linkButt" >Contas a Pagar</Link></button>
                    <button className="home-button"><Link to="/contasReceber" className="linkButt" >Contas a Receber</Link></button>
                    <button className="home-button"><Link to="/extrato" className="linkButt" >Extrato</Link></button>
                    <button className="home-button"><Link to="/login" className="linkButt" >Sair</Link> </button>
                </div>

                </div>
            </div>
        </div>
    );
}
export default App;