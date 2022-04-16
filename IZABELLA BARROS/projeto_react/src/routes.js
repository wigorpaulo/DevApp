import React from "react";
import { BrowserRouter,Switch,Route} from "react-router-dom";
import PrivateRoute from './hooks/useAxiosPrivate'


import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Transferir from "./pages/Transferir";
import TelaInicial from "./pages/TelaInicial";
import Extrato from "./pages/Extrato";
import Perfil from "./pages/Perfil";



function Routes(props){
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact  component={Login} />
                <Route path="/cadastro" component={Cadastro}/>
                <PrivateRoute path="/transferir" component={Transferir}/>
                <PrivateRoute path="/home" component={TelaInicial}  />
                <PrivateRoute path="/extrato" component={Extrato}/>
                <PrivateRoute path="/perfil" component={Perfil}/>
            </Switch>
        
        </BrowserRouter>
    );
};

export default Routes;