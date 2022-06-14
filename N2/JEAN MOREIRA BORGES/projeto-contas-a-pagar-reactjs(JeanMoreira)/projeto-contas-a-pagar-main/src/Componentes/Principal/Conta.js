import React from 'react'
import Transação from './Transação'
import Header from './Header'
import Menu from './Menu'
import '../Style.css'
import Listagem from './Listagem'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import Usuario from './Usuario'

export default class Conteudo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      telaAtual: 'Listagem',
      lista: [],
      loggout: false
    }
  }

  mudarTelaAtual = tela => {
    this.setState({ telaAtual: tela })
  }

  getListToBack = () => {
    const userId = localStorage.getItem('userId')

    axios
      .get(`http://localhost:9000/api/transaction/list/${userId}`)
      .then(response => {
        const itens = response.data
        this.setState({ lista: itens })
      })
      .catch(error => {
        alert('!!  Não foi possível listar as transações  !!')
      })
  }

  //  dataHoraTransacao = () => {
  //    const data = new Date()
  //    const dia = String(data.getDate()).padStart(2, '0')
  //    const mes = String(data.getMonth() + 1).padStart(2, '0')
  //    const ano = data.getFullYear()
  //    const dataAtual = dia + '/' + mes + '/' + ano
  //    const hora = new Date().toLocaleTimeString()
  //    const dataHora = dataAtual + ' ' + hora
  //    return dataHora
  //  }

  verificarDadosTransacao = (valorTransacao, descricaoTransacao) => {
    if (
      (valorTransacao !== '' || valorTransacao < 0) &&
      descricaoTransacao !== ''
    ) {
      return true
    }
    return false
  }

  adicionarTrasancao = async (
    valorTransacao,
    descricaoTransacao,
    tipoTransacao
  ) => {
    const isPassed = this.verificarDadosTransacao(
      valorTransacao,
      descricaoTransacao
    )

    if (isPassed) {
      const userId = localStorage.getItem('userId')

      await axios
        .post(`http://localhost:9000/api/transaction/add/${userId}`, {
          value: valorTransacao,
          description: descricaoTransacao,
          type: tipoTransacao
        })
        .then(response => {
          this.setState({ telaAtual: 'Listagem' })
          console.log(response.status)
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      const error = document.getElementById('failTransaction')
      error.classList.remove('hidden')
      error.classList.add('show')
    }
  }

  edit = async id => {
    //axios
    //  .put('http://localhost:9000/api/transaction/edit', {
    //    value: valorTransacao,
    //    description: descricaoTransacao,
    //    type: tipoTransacao
    //  })
    //  .then(response => {
    //   alert(response.status)
    //  })
    //  .catch(error => {
    //    alert(error)
    //  })
    alert('ToDo edit')
  }

  cancel = async id => {
    const userId = localStorage.getItem('userId')

    await axios
      .put(`http://localhost:9000/api/transaction/cancel/${id}/${userId}`)
      .then(response => {
        console.log(response.status)
        alert('!!  Transação cancelada com sucesso  !!')
      })
      .catch(error => {
        console.log(error)
      })
  }

  loggout = () => {
    localStorage.clear()
    this.setState({ loggout: true })
  }

  render() {
    let transacao
    if (this.state.telaAtual === 'Pagamento') {
      transacao = (
        <Transação
          titulo="Contas a pagar"
          tipo="PAY"
          metodo={this.adicionarTrasancao}
        />
      )
    } else if (this.state.telaAtual === 'Recebimento') {
      transacao = (
        <Transação
          titulo="Contas a receber"
          tipo="RECIVE"
          metodo={this.adicionarTrasancao}
        />
      )
    } else if (this.state.telaAtual === 'Usuario') {
      transacao = <Usuario sair={this.loggout} />
    } else {
      transacao = (
        <Listagem
          lista={this.state.lista}
          edit={this.edit}
          cancel={this.cancel}
          getListToBack={this.getListToBack}
        />
      )
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
