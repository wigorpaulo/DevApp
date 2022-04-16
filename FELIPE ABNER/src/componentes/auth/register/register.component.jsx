import React, { Component } from 'react';
import './register.style.css';
// import { useNavigate } from 'react-router';
import { Navigate } from 'react-router-dom';

// const navigate = () => useNavigate();

export default class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            registrado: false,
        }
    }   
    onChangeUsername = (event) =>{
        this.setState({username: event.target.value});
    }
    onChangePassword = (event) =>{
        this.setState({password: event.target.value});
    }
    registrarOnSubmit = () =>{
        this.props.registrar(this.state.username,this.state.password);
        this.setState({registrado: true})
        // const navigate = useNavigate();
        // navigate("/");  ;
    }
    render() {
        return (
            <main className="form-signin">
                {this.state.registrado && (<Navigate to="/" replace={true} />)}
                <form >
                        <h1 className="h1 mb-5 fw-bold">My Cash App</h1>
                        <h3 className="h5 mb-3 fw-light">Por favor salve sua conta</h3>

                        {/* <div className="form-floating">
                            <label for="floatingInput">First Name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="John " />
                        </div>
                        <div className="form-floating">
                            <label for="floatingInput">Last Name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Doe " />
                        </div> */}
                    <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInput" onChange={this.onChangeUsername}  placeholder="name@example.com" />
                            <label for="floatingInput">E-mail</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="password" class="form-control" id="floatingPassword" onChange={this.onChangePassword}  placeholder="Password" />
                            <label for="floatingPassword">Senha</label>
                        </div>

                        <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.registrarOnSubmit}>Registrar-se</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
                </form>
            </main>
        )
    }
}



