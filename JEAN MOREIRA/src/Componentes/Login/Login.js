import React from 'react'
import { Navigate } from 'react-router-dom'
import Button from '../Auxiliares/Button'
import Cadastro from '../Cadastro/Cadastro'
import Input from '../Auxiliares/Input'
import '../Style.css'

class Login extends React.Component {
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

  telaCadastro = e => {
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

  efetuarCadastro = (username, password) => {
    alert(username + '  ' + password)
    let isPassed = this.verificarCadastro(username, password)
    alert(isPassed)
    if (isPassed) {
      this.setState({
        usernameCadastro: username,
        passwordCadastro: password,
        passwordLogin: '',
        usernameLogin: ''
      })

      alert(this.state.usernameLogin + '  ' + this.state.passwordLogin)
      this.telaLogin()
    } else {
      const error = document.getElementById('failCadastro')
      error.classList.remove('hidden')
      error.classList.add('show')
    }
  }

  loginVerificator = e => {
    alert(this.state.usernameCadastro + this.state.passwordCadastro)
    alert(this.state.usernameLogin + this.state.passwordLogin)
    if (
      this.state.usernameLogin === this.state.usernameCadastro &&
      this.state.passwordLogin === this.state.passwordCadastro
    ) {
      this.setState({ isLoggedin: true })
    } else {
      this.setState({ usernameLogin: '', passwordLogin: '' })
      const userNotEnter = document.getElementById('userNotEnter')
      userNotEnter.classList.remove('hidden')
      userNotEnter.classList.add('show')
    }
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

export default Login
