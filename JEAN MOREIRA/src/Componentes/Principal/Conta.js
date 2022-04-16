import React from 'react'
import Transação from './Transação'
import Header from './Header'
import Menu from './Menu'
import '../Style.css'
import Listagem from './Listagem'
import { Navigate } from 'react-router-dom'

class Conteudo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      telaAtual: 'Listagem',
      lista: [
        {
          valor: 1000,
          descricao: 'Saldo inicial',
          tipo: 'Recebimento',
          data: this.dataHoraTransacao()
        }
      ],
      loggout: false
    }
  }

  mudarTelaAtual = tela => {
    this.setState({ telaAtual: tela })
  }

  dataHoraTransacao = () => {
    const data = new Date()
    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String(data.getMonth() + 1).padStart(2, '0')
    const ano = data.getFullYear()
    const dataAtual = dia + '/' + mes + '/' + ano
    const hora = new Date().toLocaleTimeString()
    const dataHora = dataAtual + ' ' + hora
    return dataHora
  }

  verificarDadosTransacao = (valorTransacao, descricaoTransacao) => {
    if (valorTransacao !== '' && descricaoTransacao !== '') {
      return true
    }
    return false
  }

  adicionarTrasancao = (valorTransacao, descricaoTransacao, tipoTransacao) => {
    const isPassed = this.verificarDadosTransacao(
      valorTransacao,
      descricaoTransacao
    )
    if (isPassed) {
      const transacao = {
        valor: valorTransacao,
        descricao: descricaoTransacao,
        tipo: tipoTransacao,
        data: this.dataHoraTransacao()
      }
      this.setState({ lista: [...this.state.lista, transacao] })
      this.setState({ telaAtual: 'Listagem' })
    } else {
      const error = document.getElementById('failTransaction')
      error.classList.remove('hidden')
      error.classList.add('show')
    }
  }

  loggout = () => {
    this.setState({ loggout: true })
  }

  render() {
    let transacao
    if (this.state.telaAtual === 'Pagamento') {
      transacao = (
        <Transação
          titulo="Contas a pagar"
          tipo="Pagamento"
          metodo={this.adicionarTrasancao}
        />
      )
    } else if (this.state.telaAtual === 'Recebimento') {
      transacao = (
        <Transação
          titulo="Contas a receber"
          tipo="Recebimento"
          metodo={this.adicionarTrasancao}
        />
      )
    } else {
      transacao = <Listagem lista={this.state.lista} />
    }

    if (this.state.loggout) {
      return <Navigate to="/" />
    }

    return (
      <div style={{ height: '100%', width: '100%' }}>
        <div className="container-grid">
          <div className="Header">
            <Header saldo={this.state.saldo} lista={this.state.lista} />
          </div>
          <div className="Menu">
            <Menu mudarTela={this.mudarTelaAtual} loggout={this.loggout} />
          </div>
          <div className="Content">{transacao}</div>
        </div>
      </div>
    )
  }
}
export default Conteudo
