import React from 'react'
import Button from '../Auxiliares/Button'
import '../Style.css'

class Menu extends React.Component {
  mudarTelaPagamento = () => {
    this.props.mudarTela('Pagamento')
  }

  mudarTelaRecebimento = () => {
    this.props.mudarTela('Recebimento')
  }

  mudarTelaListagem = () => {
    this.props.mudarTela('Listagem')
  }

  mudarTelaUsuario = () => {
    this.props.mudarTela('Usuario')
  }

  sair = () => {
    this.props.loggout()
  }

  render() {
    return (
      <div>
        <Button
          id="pagar"
          acao="Pagar"
          estiloBotao="btn-menu"
          metodo={this.mudarTelaPagamento}
        />

        <Button
          acao="Receber"
          id="receber"
          estiloBotao="btn-menu"
          metodo={this.mudarTelaRecebimento}
        />

        <Button
          id="listar"
          acao="Extrato"
          estiloBotao="btn-menu"
          metodo={this.mudarTelaListagem}
        />

        <Button
          id="user"
          acao="Usuário"
          estiloBotao="btn-menu"
          metodo={this.mudarTelaUsuario}
        />

        <Button
          id="sair"
          acao="Sair"
          estiloBotao="btn-menu"
          metodo={this.sair}
        />
      </div>
    )
  }
}

export default Menu
