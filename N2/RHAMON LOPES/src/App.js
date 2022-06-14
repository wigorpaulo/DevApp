import React from 'react';
import Login from './componenty/Login'
import CadastroUser from './componenty/CadastroUser';
import CadastroConta from './componenty/CadastroConta';
import ContasReceber from './componenty/ContasReceber';
import Menu from './componenty/Menu';
class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
          <div>
              <p>
                
              </p>
                <Login />
                <Menu/>
          </div>
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
