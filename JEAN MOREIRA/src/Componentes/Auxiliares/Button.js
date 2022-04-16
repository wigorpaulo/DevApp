import React from 'react'
import '../Style.css'

class Button extends React.Component {
  metodo = e => {
    this.props.metodo()
    e.preventDefault()
  }

  render() {
    return (
      <div className={this.props.estiloContainer}>
        <button
          id={this.props.id}
          onClick={this.metodo}
          className={this.props.estiloBotao}
        >
          {this.props.acao}
        </button>
      </div>
    )
  }
}

export default Button
