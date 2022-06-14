import React,{Component} from 'react';
import { Navigate } from 'react-router-dom';

 class Cadastro extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            password: '',
        }
    }   
    ChangeUsername = (event) =>{
        this.setState({username: event.target.value});
    }
    ChangePassword = (event) =>{
        this.setState({password: event.target.value});
    }
    cadastrarUsuario = () =>{
        this.props.registrar(this.state.username,this.state.password);
        this.setState({registrado: true})
    }
    // render() {
    //     return (
    //         <main className="form-signin">
    //             {this.state.registrado && (<Navigate to="/home" replace={true} />)}
    //             <form >
    //                     <h1 className="h1 mb-5 fw-bold">Meu Extrato</h1>
    //                     <h3 className="h5 mb-3 fw-light">Criar sua conta do Meu Extrato</h3>

    //                 <div class="form-floating">
    //                         <input type="email" class="form-control" id="floatingInput" onChange={this.onChangeUsername}  placeholder="name@example.com" />
    //                         <label for="floatingInput">E-mail</label>
    //                     </div>
    //                     <div class="form-floating mb-4">
    //                         <input type="password" class="form-control" id="floatingPassword" onChange={this.onChangePassword}  placeholder="Password" />
    //                         <label for="floatingPassword">Senha</label>
    //                     </div>

    //                     <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.registrarOnSubmit}>Cadastrar-se</button>
    //             </form>
    //         </main>
    //     )
    // }
    render() {
        return (
            <main className="form">
                {this.state.registrado && (<Navigate to="/home" replace={true} />)}
                <form >
                        <h1>Meu Extrato</h1>
                        <h3>Criar conta Meu Extrato</h3>

                    <div class="email">
                        <input type="email" class="form-control" id="floatingInput" onChange={this.ChangeUsername}  placeholder="email" />
                        <label for="floatingInput">E-mail</label>
                    </div>
                    <div class="senha">
                        <input type="password" class="form-control" id="floatingPassword" onChange={this.ChangePassword}  placeholder="senha" />
                        <label for="floatingPassword">Senha</label>
                    </div>

                    <button type="button" onClick={this.cadastrarUsuario}>Cadastrar-se</button>
                </form>
            </main>
        )
    }
}

export default  Cadastro;

