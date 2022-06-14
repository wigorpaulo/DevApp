import React from "react";
import {Link} from "react-router-dom"
import './style.css'

const App = () =>{
    return(
        <div className="container">
            <div className="container-home">
                <div className="wrap-home">
                    <span className="home-title">
                        Home
                        
                    </span>

                <div className="container-button-1-home"> 
                    <button className="home-button"><Link to="/contasPagar" className="linkButt" >Contas a Pagar</Link></button>
                    <button className="home-button"><Link to="/contasReceber" className="linkButt" >Contas a Receber</Link></button>
                    <button className="home-button"><Link to="/extrato" className="linkButt" >Extrato</Link></button>
                    <button className="home-button"><Link to="/" className="linkButt" >Sair</Link> </button>
                </div>

                </div>
            </div>
        </div>
    );
}
export default App;