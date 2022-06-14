import React from 'react'
import '../Style.css'

class Input extends React.Component {
  render() {
    return (
      <div className={this.props.styleDivContainer}>
        <label className={this.props.labelStyle}>{this.props.labelText}</label>
        <br />
        <input
          id={this.props.inputId}
          type={this.props.inputType}
          name={this.props.inputName}
          className={this.props.inputStyle}
          placeholder={this.props.inputPlaceholder}
          min={this.props.minValue}
          value={this.props.value}
          onChange={this.props.onChange}
          disabled={this.props.disabled}
        />
      </div>
    )
  }
}

export default Input
