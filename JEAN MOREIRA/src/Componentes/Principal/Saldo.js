import React from 'react'

class Saldo extends React.Component {
  render() {
    let saldoPositivo = 0
    let saldoNegativo = 0

    this.props.lista.forEach(item => {
      let value = parseFloat(item.valor)
      if (item.tipo === 'Recebimento') {
        saldoPositivo += value
      } else {
        saldoNegativo += value
      }
    })

    let saldoFinal = saldoPositivo - saldoNegativo

    return <div>Saldo: R${saldoFinal}</div>
  }
}

export default Saldo
