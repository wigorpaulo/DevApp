import './Login.css';
import bitImg from '../assets/Bitcoin-Emblema.png';
import {Link} from "react-router-dom";
import {useState} from "react";
import {Layout} from "../components/Layout";
import { useNavigate } from 'react-router-dom';


export const TelaLogin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    return (
        <Layout>
            <form className="login-form">

                <span className="login-form-title">Gerenciador de Finanças!</span>
                <span className="login-form-title">
                    <img src={bitImg} alt="Bitcoin"/>
                </span>

                <div className="wrap-input">
                    <input
                        className={email !== "" ? 'has-val input' : 'input'}
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={password !== "" ? 'has-val input' : 'input'}
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Password"></span>
                </div>

                <div className="container-login-form-btn">
                    <button
                        className="login-form-btn"
                        onClick={() => navigate("/home")}>Login
                    </button>
                </div>

                <div className="text-center">
                    <span className="txt1">Não possui conta?</span>

                    <Link className="text2" to="/register">Criar conta.</Link>
                </div>
            </form>
        </Layout>
    );
}
