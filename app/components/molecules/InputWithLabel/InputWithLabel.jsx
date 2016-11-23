import './inputWithLabel.scss'

import React, { Component, PropTypes } from 'react'

import Label from '../../atoms/Label'
import Input from '../../atoms/Input'


class InputWithLabel extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired,
    type: PropTypes.string,
    inputValue: PropTypes.string
  }

  render() {
    return(
      <div className="m-input-label">
        <Label
          for={this.props.id}
          text={this.props.labelText}
        />
        <Input
          value={this.props.defaultValue}
          changeHandler={this.props.changeHandler}
          id={this.props.id}
          type={this.props.type}
        />
      </div>
    )
  }
}

export default InputWithLabel
