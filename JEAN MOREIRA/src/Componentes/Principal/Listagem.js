import React from 'react'

class Listagem extends React.Component {
  render() {
    const linhas = this.props.lista.map((lista, index) => (
      <tr key={index}>
        <td>{lista.valor}</td>
        <td>{lista.descricao}</td>
        <td>{lista.tipo}</td>
        <td>{lista.data}</td>
      </tr>
    ))

    return (
      <div>
        <h2 className="title-conta">Extrato</h2>
        <table className="demo">
          <thead>
            <tr>
              <th>Valor (R$)</th>
              <th>Descrição</th>
              <th>Tipo de transação</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>{linhas}</tbody>
        </table>
      </div>
    )
  }
}

export default Listagem
