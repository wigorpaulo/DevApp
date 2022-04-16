import { useState } from "react";
import "./styleRegister.css"
import Logo from "../../img/lontraLogo2.png";
import {Link} from "react-router-dom"

const Page = () => {
    const [nome, setNome] = useState(" ");
    const [cpf, setCpf] = useState(" ");
    const [emailRegister, setEmailRegister] = useState(" ");
    const [senhaRegister, setSenhaRegister] = useState(" ");
    const [confirmarSenha, setConfirmarSenha] = useState(" ");

    return (

        <div className="container">

            <div className="container-register">
                <img src={Logo} alt="Logo" className="Logo" />
                <div className="wrap-register">
                    <form className="form-register">
                        <span className="register-form-title">
                            Register
                        </span>
                        <div className="wrap-input-Register">
                            <input className={nome !== " " ? "has-val inputRegister" : "inputRegister"} type="nome-Register" value={nome} onChange={evento => setNome(evento.target.value)} />
                            <span className="focus-input-Register" data-placeholder="Nome"></span>
                        </div>
                        <div className="wrap-input-Register">
                            <input className={cpf !== " " ? " has-val inputRegister" : "inputRegister"} type="cpfRegister" value={cpf} onChange={evento => setCpf(evento.target.value)} />
                            <span className="focus-input-Register" data-placeholder="CPF"></span>
                        </div>
                        <div className="wrap-input-Register">
                            <input className={emailRegister !== " " ? " has-val inputRegister" : "inputRegister"} type="emailRegister" value={emailRegister} onChange={evento => setEmailRegister(evento.target.value)} />
                            <span className="focus-input-Register" data-placeholder="Email"></span>
                        </div>
                        <div className="wrap-input-Register">
                            <input className={senhaRegister !== " " ? " has-val inputRegister" : "inputRegister"} type="senhaRegister" value={senhaRegister} onChange={evento => setSenhaRegister(evento.target.value)} />
                            <span className="focus-input-Register" data-placeholder="Senha"></span>
                        </div>
                        <div className="wrap-input-Register">
                            <input className={confirmarSenha !== " " ? " has-val inputRegister" : "inputRegister"} type="ConfirmarSenhaRegister" value={confirmarSenha} onChange={evento => setConfirmarSenha(evento.target.value)} />
                            <span className="focus-input-Register" data-placeholder="Confirmar Senha"></span>
                        </div>
                        <div className="container-register-button">
                            <Link to="/login"><button className="register-form-btn-Register">Registrar</button></Link>

                        </div>
                        
                        <div className="text-center-Register">
                            <span className="txt1-Register">Já tem uma conta  ?</span>
                            <li className="txt2-Register"><Link to="/login">Faça login aqui</Link></li>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
export default Page;