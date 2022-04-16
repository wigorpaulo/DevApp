import React from 'react'
import '../Style.css'
import Button from '../Auxiliares/Button'
import Input from '../Auxiliares/Input'

class Cadastro extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  alterarUsernameCadastro = e => {
    this.setState({ username: e.target.value })
  }

  alterarPasswordCadastro = e => {
    this.setState({ password: e.target.value })
  }

  submeterForm = e => {
    alert(this.state.username + this.state.password)
    this.props.metodo(this.state.username, this.state.password)
    this.setState({ username: '', password: '' })
  }

  render() {
    return (
      <div className="container-cadastro">
        <form>
          <h2 className="title-cadastro">Cadastro</h2>

          <hr />

          <div className="container-itens-cadastro">
            <Input
              styleDivContainer="division"
              labelStyle="text-label"
              labelText="Informe um nome para usuário:"
              inputId="usernameCadastro"
              inputType="text"
              inputName="username"
              inputStyle="input input-cadastro"
              inputPlaceholder=""
              value={this.state.username}
              onChange={this.alterarUsernameCadastro}
            />

            <Input
              labelStyle="text-label"
              labelText="Informe uma senha:"
              inputId="passwordCadastro"
              inputType="password"
              inputName="password"
              inputStyle="input input-cadastro"
              value={this.state.password}
              onChange={this.alterarPasswordCadastro}
            />
          </div>

          <p
            id="failCadastro"
            className="error hidden"
            style={{ textAlign: 'left', marginLeft: '45px' }}
          >
            Preencha todos os campos
          </p>

          <Button
            acao="salvar"
            estiloContainer="container-itens-cadastro container-button-cadastro"
            estiloBotao="button button-cadastro"
            metodo={this.submeterForm}
          />
        </form>
      </div>
    )
  }
}

export default Cadastro
