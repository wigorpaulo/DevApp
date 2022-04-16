import React from 'react'
import Button from '../Auxiliares/Button'
import Input from '../Auxiliares/Input'
import TextArea from '../Auxiliares/TextArea'

class Transação extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      valor: '',
      descricao: ''
    }
  }

  mudarValor = e => {
    this.setState({ valor: e.target.value })
  }

  mudarDescricao = e => {
    this.setState({ descricao: e.target.value })
  }

  realizarTransacao = e => {
    this.props.metodo(this.state.valor, this.state.descricao, this.props.tipo)
    this.setState({ valor: '', descricao: '' })
  }

  render() {
    return (
      <div className="flex-container">
        <h2 className="title-conta">{this.props.titulo}</h2>

        <div>
          <Input
            styleDivContainer=""
            labelStyle=""
            labelText=""
            inputId="valorPagar"
            inputType="number"
            inputName="valorPagar"
            inputStyle="input-conta"
            inputPlaceholder="Valor"
            minValue="0"
            value={this.state.valor}
            onChange={this.mudarValor}
          />

          <TextArea
            name="descricaoPagamento"
            id="descricaoPagametno"
            styleTextarea="text-area"
            placeholder="Descrição"
            value={this.state.descricao}
            onChange={this.mudarDescricao}
          />

          <p id="failTransaction" className="error hidden">
            Preencha todos os campos
          </p>

          <Button
            acao="Pagar"
            estiloBotao="button button-conta-pagar "
            style={{ marginTop: '20px' }}
            metodo={this.realizarTransacao}
          />
        </div>
      </div>
    )
  }
}

export default Transação
