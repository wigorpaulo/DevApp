import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Nav(){

    let navigate = useNavigate()

        function sair(){
            localStorage.clear()
            navigate('/')
        }

    return(
        <nav>
            <Link to= '/home'>[Home]</Link> 
            <Link to = '/saldo'>[Saldo]</Link> 
            <Link to = '/despesas'>[Despesas]</Link> 
            <Link to= '/extratos'>[Extratos]</Link> 

            <button onClick={sair}>sair</button>
            
        </nav>
    )
}