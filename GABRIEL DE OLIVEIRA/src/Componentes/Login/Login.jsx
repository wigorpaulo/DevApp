import React, { Component } from 'react';
import { Navigate } from "react-router-dom";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
        }     
    }
    onChangeUsername = (event) =>{
        this.setState({username: event.target.value});
    }
    onChangePassword = (event) =>{
        this.setState({password: event.target.value});
    }
    logarOnSubmit = () =>{
        console.log(this.props.isLoggedIn);
        try {
            this.props.logar(this.state.username,this.state.password);
        } catch (error) {
            console.log(error.message);
            this.setState({error: error.message});
        }
    }
     /*  {this.props.isLoggedIn && (<Navigate to="/app" replace={true} />)}*/
    render() {
        return (
            <main className="validacao">
             
                {this.props.isLoggedIn && (<Navigate to="/home" replace={true} />)}
                <form className='needs-validation'>
                        <h1 className="titulo">Meu Extrato</h1>


                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInput" onChange={this.onChangeUsername}  placeholder="email" />
                        </div>
                        <div class="form-floating mb-4">
                            <input type="password" class="form-control" id="floatingPassword" onChange={this.onChangePassword}  placeholder="senha" />
                            <div className='text-danger'>
                                {this.state.error && <span>{this.state.error}</span>}
                            </div>
                        </div>
                        
                        <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.logarOnSubmit}>Iniciar seção</button>
                        <br/>
                        <a className="w-100 btn btn-lg btn-dark my-2" href='/cadastro'>Registrar-se</a>
                </form>
            </main>
        )
    }
}