import React, {useState} from "react";
import Identificacao from "./componentes/Identificacao";
import Navegacao from "./componentes/Navegacao";
import Home from "./componentes/Home";
import Servicos from "./componentes/Servicos";
import Contactos from "./componentes/Contactos";
import Pagamento from "./componentes/Pagamento";

import { Routes } from "react-router-dom";
import Nome from "./componente_aula/Nome";
import Curso from "./componente_aula/Curso";
import Cidade from "./componente_aula/Cidade";


class App extends React.Component{
    constructor(){
        super()
        this.state={
            login: "",
            senha: ""
        }
    }
     
     alterarLogin = e => {
         this.setState({login: e.target.value})
     }

     
     alterarSenha = e => {
        this.setState({senha: e.target.value})
    }

    submeterForm = e => {
        console.log("login" + this.state.login)
        console.log("senha" + this.state.senha)
    }

    render(){
        return(
            <form onSubmit={this.submeterForm}>
                <p>Login: 
                <input type="text" value={this.state.login} onChange={this.alterarLogin} /></p>
                <p>Senha:
                <input type="senha" value={this.state.senha} onChange={this.alterarSenha} /></p>
                <input type="submit" value="Entrar"/>
            </form>
        )
    }
}

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             nome: "Wigor"
//         }
//     }

//     alterarNome = () => {
//         this.setState({nome: "Joaquim"})
//     }

//     render(){
//         return(
//             <div>
//                 <p>App</p>
//                 <hr />
//                 <Nome nome={this.state.nome} apelido="Magalhaes" metodo={this.alterarNome} />
//                 <Curso />
//                 <Cidade />
//             </div>
//         )
//     }
// } 

// class App extends React.Component {
//     render(){
//         return(
//             <div>
//                 <p>Teste</p>
//                 <Identificacao />
//             </div>
//         )
//     }
// }

//  class App extends React.Component {
//      render(){
//          return(
//              <div>
//                  <Navegacao />

//                  <Router>
//                      <Routes>
//                          <Route path="/"
//                                 element={<Home />}
//                          />
//                          <Route path="/servicos"
//                                 element={<Servicos />}
//                          />
//                          <Route path="/contactos" element={<Contactos />} />
//                      </Routes>
//                  </Router>
//              </div>
//          )
//      }
//  } 

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Navegacao/>
//                 <Router>
//                     <Routes>
//                         <Route exact path="/"
//                                element={<Home/>}
//                         />
//                         <Route exact path="/servicos"
//                                element={<Servicos/>}
//                         />
//                         <Route exact path="/contactos"
//                                element={<Contactos/>}
//                         />
//                     </Routes>
//                 </Router>
//             </div>
//         )
//     }
// }

// const App = () => {
//
//     const [nome, setNome] = useState("Wigor");
//
//     const AlterarNome = () => {
//         setNome("Paulo");
//     }
//
//     return(
//         <div>
//             <p>O meu nome é: {nome}</p>
//             <button onClick={AlterarNome}>Alterar</button>
//         </div>
//     )
// }


// instalar o React Router
// npm install react-router-dom

// Artigo referente a fluxo de dados
// https://towardsdatascience.com/passing-data-between-react-components-parent-children-siblings-a64f89e24ecf
export default App;
