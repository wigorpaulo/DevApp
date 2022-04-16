import axios from "axios";
import React, { Component, useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";

class CadastroLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  changeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  cadastrarUsuario = () => {
    this.props.metodoSetState(this.state.username, this.state.password);
  };

  render() {
    return (
      <div>
        <h1 className="cadastrar">Cadastro</h1>
        <div className="login-content">
          <p>Informe o username:</p>
          <input
            type="email"
            placeholder="Email"
            onChange={this.changeUsername}
          />
          <br />
          <p>Informe o password:</p>
          <input
            type="password"
            placeholder="Senha"
            onChange={this.changePassword}
          />
          <br />
          <br />
          <button onClick={this.cadastrarUsuario} className="cadastrar-btn">
            Gravar
          </button>
          <Link to="/">
            <button className="cadastrar-btn" type="submit">
              Voltar
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CadastroLogin;

// export default function CadastroLogin() {
//   let navigate = useNavigate();
//   let [nome, setNome] = React.useState("");
//   let [email, setEmail] = React.useState("");
//   let [password, setPassword] = React.useState("");

//   function submit(e) {
//     e.preventDefault();
//     console.log(nome, email, password);

//     axios
//       .post("http://localhost:4000/users", {
//         nome: nome,
//         email: email,
//         senha: password,
//       })
//       .then((resposta) => {
//         console.log(resposta);
//       });
//   }

//   return (
//     <>
//       <h1 className="cadastrar">Cadastro</h1>
//       <div className="login-content">
//         <form onSubmit={submit} method="POST">
//           <input
//             onChange={(e) => {
//               setNome(e.target.value);
//             }}
//             type="text"
//             placeholder = "Nome";
//           />{" "}
//           <br />
//           <input
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//             type="email"
//             placeholder = "Email";
//           />{" "}
//           <br />
//           <input
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//             type="password"
//             placeholder="Senha"
//           />{" "}
//           <br />
//           <button className="cadastrar-btn" type="submit">
//             Cadastrar
//           </button>
//         </form>

//         <Link to="/">
//           <button className="cadastro-btn" type="submit">
//             Voltar
//           </button>
//         </Link>
//       </div>
//     </>
//   );
// }
