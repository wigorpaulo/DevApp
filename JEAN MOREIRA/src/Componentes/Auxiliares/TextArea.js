import React from 'react'
import '../Style.css'

class TextArea extends React.Component {
  render() {
    return (
      <div className={this.props.contaiterTextarea}>
        <textarea
          name={this.props.name}
          id={this.props.id}
          className={this.props.styleTextarea}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        ></textarea>
      </div>
    )
  }
}

export default TextArea
