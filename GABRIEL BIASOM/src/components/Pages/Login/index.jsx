import React, { useState } from "react";
import { Navigate } from "react-router";
import CadastroLogin from "../Cadastro/CadastroLogin";
export default function Login() {
  const [dadosLogin, setDadosLogin] = useState({
    username: "",
    password: "",
    isViewLogin: true,
    loginSucesso: false,
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isViewLoginTrue = { visibility: "visible" };
  const isViewLoginFalse = { visibility: "collapse" };

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const gravaDadosLogin = (user, senha) => {
    setDadosLogin({
      username: user,
      password: senha,
      isViewLogin: true,
    });
  };

  const getDadosLogin = () => {
    let condicao =
      dadosLogin.username !== "" &&
      dadosLogin.password !== "" &&
      dadosLogin.username === username &&
      dadosLogin.password === password;
    if (condicao) {
      setDadosLogin({ loginSucesso: true });
    }
  };

  const habilitaCadastroUsuario = () => {
    setDadosLogin({ isViewLogin: false });
  };

  if (dadosLogin.loginSucesso) {
    return <Navigate to="/saldo" />;
  } else {
    return (
      <div>
        <div
          style={dadosLogin.isViewLogin ? isViewLoginTrue : isViewLoginFalse}
        >
          <h1>Login</h1>
          <div className="login-content">
            <p>Informe o username:</p>
            <input type="email" placeholder="Email" onChange={changeUsername} />
            <br />
            <p>Informe o password:</p>
            <input
              type="password"
              placeholder="Senha"
              onChange={changePassword}
            />

            <br />
            <br />
            <button className="cadastro-btn" onClick={habilitaCadastroUsuario}>
              Cadastrar Usuario
            </button>
            <br />
            <br />
            <button className="entrar-cor" onClick={getDadosLogin}>
              Logar
            </button>
          </div>
        </div>

        <div
          style={!dadosLogin.isViewLogin ? isViewLoginTrue : isViewLoginFalse}
        >
          <CadastroLogin metodoSetState={gravaDadosLogin} />
        </div>
      </div>
    );
  }
}

/* import axios from "axios";
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  let [email, setEmail] = React.useState("");
  let [senha, setSenha] = React.useState("");

  let [message, setMessage] = React.useState("");

  React.useEffect(() => {
    if (localStorage.getItem("email")) navigate("/");
  }, []);

  function submit(e) {
    e.preventDefault();
    console.log(email, senha);

    axios
      .get("http://localhost:4000/users?email=" + email + "&senha=" + senha)
      .then((resp) => {
        if (resp.data.length == 1) {
          setMessage("");
          localStorage.setItem("email", resp.data[0].email);
          navigate("/saldo");
        } else {
          setMessage("Email ou Senha incorreto");
        }
      });
  }

  return (
    <>
      <h1>Login</h1>
      <h5 className="message-login">{message}</h5>
      <div className="login-content">
        <form onSubmit={submit} method="POST">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />{" "}
          <br />
          <input
            onChange={(e) => {
              setSenha(e.target.value);
            }}
            type="password"
            placeholder="Senha"
          />{" "}
          <br />
          <button className="entrar-cor" type="submit">
            Entrar
          </button>
        </form>

        <Link to="/cadastrar">
          <button className="cadastro-btn" type="submit">
            Cadastrar
          </button>
        </Link>
      </div>
    </>
  );
}
 */
