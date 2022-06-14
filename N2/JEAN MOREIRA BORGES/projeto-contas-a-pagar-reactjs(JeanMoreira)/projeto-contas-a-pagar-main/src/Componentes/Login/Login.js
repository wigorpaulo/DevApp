import React from 'react'
import { Navigate } from 'react-router-dom'
import Button from '../Auxiliares/Button'
import Cadastro from '../Cadastro/Cadastro'
import Input from '../Auxiliares/Input'
import '../Style.css'
import axios from 'axios'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      telaAtual: 'Login',
      usernameLogin: '',
      passwordLogin: '',
      usernameCadastro: '',
      passwordCadastro: '',
      isLoggedin: false
    }
  }

  escutarInputUsername = e => {
    this.setState({ usernameLogin: e.target.value })
  }

  escutarInputPassword = e => {
    this.setState({ passwordLogin: e.target.value })
  }

  escutarUsernameCadastro = e => {
    this.setState({ usernameCadastro: e.target.value })
  }

  escutarPasswordCadastro = e => {
    this.setState({ passwordCadastro: e.target.value })
  }

  telaCadastro = () => {
    const login = document.getElementById('login')
    login.classList.remove('show')
    login.classList.add('hidden')

    const cadastro = document.getElementById('cadastro')
    cadastro.classList.remove('hidden')
    cadastro.classList.add('show')
  }

  telaLogin = () => {
    const cadastro = document.getElementById('cadastro')
    cadastro.classList.remove('show')
    cadastro.classList.add('hidden')

    const login = document.getElementById('login')
    login.classList.remove('hidden')
    login.classList.add('show')

    const erro = document.getElementById('userNotEnter')
    erro.classList.remove('show')
    erro.classList.add('hidden')
  }

  verificarCadastro = (username, password) => {
    if (username !== '' && password !== '') {
      return true
    }
    return false
  }

  loggout = () => {
    this.setState({ isLoggedin: false })
  }

  efetuarCadastro = async (username, password) => {
    const isPassed = this.verificarCadastro(username, password)

    if (isPassed) {
      await axios
        .post('http://localhost:9000/api/user/add', {
          username: username,
          password: password
        })
        .then(response => {
          if (response.status === 201) {
            this.setState({
              usernameCadastro: username,
              passwordCadastro: password,
              passwordLogin: '',
              usernameLogin: ''
            })
            this.telaLogin()
            alert('!! Cadastro realizado com sucesso !!')
          }
        })
        .catch(error => {
          if (error.response?.status === 406) {
            const error = document.getElementById('failCadastro')
            error.classList.remove('hidden')
            error.classList.add('show')
          } else if (error.response?.status === 400) {
            alert('Não foi possível realizar o cadastro. Tente novamente')
          }
        })
    } else {
      const error = document.getElementById('failCadastro')
      error.classList.remove('hidden')
      error.classList.add('show')
    }
  }

  loginVerificator = async e => {
    await axios
      .post('http://localhost:9000/api/user/login', {
        username: this.state.usernameLogin,
        password: this.state.passwordLogin
      })
      .then(response => {
        localStorage.setItem('userId', response.data.id)
        localStorage.setItem('username', response.data.username)

        this.setState({ isLoggedin: true })
      })
      .catch(error => {
        if (error.response?.status === 406) {
          this.setState({ usernameLogin: '', passwordLogin: '' })
          const userNotEnter = document.getElementById('userNotEnter')
          userNotEnter.classList.remove('hidden')
          userNotEnter.classList.add('show')
        } else if (error.response?.status === 400) {
          alert('Não foi possível realizar a consulta. Tente novamente')
        }
      })
  }

  render() {
    const buttonCadastro = {
      backgroundColor: 'white',
      color: 'black'
    }

    if (this.state.isLoggedin) {
      return <Navigate to={'/conta'} />
    } else {
      return (
        <div>
          <div id="login" className="main show">
            <div className="container">
              <form>
                <h1 className="title-login">LOGIN</h1>

                <Input
                  styleDivContainer="input-login"
                  labelStyle="hidden"
                  labelText=""
                  inputId="usernameLogin"
                  inputType="text"
                  inputName="username"
                  inputStyle="input"
                  inputPlaceholder="Username"
                  value={this.state.usernameLogin}
                  onChange={this.escutarInputUsername}
                />

                <Input
                  styleDivContainer="input-login"
                  labelStyle="hidden"
                  labelText=""
                  inputId="passwordLogin"
                  inputType="password"
                  inputName="password"
                  inputStyle="input"
                  inputPlaceholder="Password"
                  value={this.state.passwordLogin}
                  onChange={this.escutarInputPassword}
                />

                <p id="userNotEnter" className="error hidden">
                  Usuario Inválido
                </p>

                <div className="cadastro">
                  <p>Não tem cadastro?</p>
                  <Button
                    acao="Cadastrar"
                    metodo={this.telaCadastro}
                    estiloBotao={buttonCadastro}
                  />
                </div>

                <Button
                  acao="entrar"
                  estiloContainer="button-container-login"
                  estiloBotao="button button-login"
                  metodo={this.loginVerificator}
                />
              </form>
            </div>
          </div>

          <div id="cadastro" className="hidden">
            <Cadastro metodo={this.efetuarCadastro} />
          </div>
        </div>
      )
    }
  }
}
