import React from "react";

class CadastroUser extends React.Component{
    constructor(){
        super();
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
            <div>
                <form onSubmit={this.submeterForm}>
                <p>Login: 
                <input type="text" value={this.state.login} onChange={this.alterarLogin} /></p>
                <p>Senha:
                <input type="senha" value={this.state.senha} onChange={this.alterarSenha} /></p>
                <input type="submit" value="Entrar"/>
            </form>
            </div>
        )
    }
}
export default CadastroUser;