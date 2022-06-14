import axios from 'axios'
import React from 'react'
import Button from '../Auxiliares/Button'
import Input from '../Auxiliares/Input'
import '../Style.css'

export default class Usuario extends React.Component {
  constructor() {
    super()
    this.state = {
      username: localStorage.getItem('username'),
      password: ''
    }
  }

  escutarPassword = e => {
    this.setState({ password: e.target.value })
  }

  editar = async () => {
    const userId = localStorage.getItem('userId')

    await axios
      .put(`http://localhost:9000/api/user/edit/${userId}`, {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        alert('!!!  Usuario alterado com sucesso  !!!')
      })
      .catch(error => {
        if (error.response?.status === 406) {
          alert('Usuário não encontrado')
        } else if (error.response?.status === 400) {
          alert('Não foi possível realizar a edição')
        }
      })
  }

  excluir = async () => {
    const userId = localStorage.getItem('userId')

    await axios
      .put(`http://localhost:9000/api/user/delete/${userId}`)
      .then(response => {
        alert('Usuário excluido com sucesso')
        this.props.sair()
      })
      .catch(error => {
        if (error.response?.status === 406) {
          alert('Usuário não encontrado')
        } else if (error.response?.status === 400) {
          alert('Não foi possível realizar a exclusão')
        }
      })
  }

  render() {
    return (
      <div>
        <h1>Olá!!</h1>
        <br />
        <h3>Deseja editar seu usuário?</h3>
        <Input
          labelStyle="hidden"
          labelText=""
          inputType="text"
          inputStyle="input-edit"
          inputPlaceholder="Password"
          value={this.state.username}
          disabled="disabled"
        />

        <Input
          labelStyle="hidden"
          labelText=""
          inputType="password"
          inputStyle="input-edit"
          inputPlaceholder="Password"
          value={this.state.password}
          onChange={this.escutarPassword}
        />

        <br />

        <Button
          acao="editar"
          estiloContainer={{ marginTop: '25px' }}
          estiloBotao="button button-login"
          metodo={this.editar}
        />

        <br />
        <br />

        <h3>Deseja excluir seu usuário?</h3>
        <br />

        <Button
          acao="Excluir"
          id="excluir"
          estiloContainer={{ marginTop: '25px' }}
          estiloBotao="button button-login"
          metodo={this.excluir}
        />
      </div>
    )
  }
}
