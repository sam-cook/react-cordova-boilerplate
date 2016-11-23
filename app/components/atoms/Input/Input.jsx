import './input.scss'
import React, { Component, PropTypes } from 'react'

class Input extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: props.initialValue
    }
  }

  static propTypes = {
    changeHandler: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    initialValue: PropTypes.string,
    placeHolder: PropTypes.string,
    type: PropTypes.string
  }

  static defaultProps = {
    type: 'text',
    placeHolder: ''
  }

  render() {
    return(
      <input
        id={this.props.id}
        className="a-input"
        onChange={this.props.changeHandler}
        type={this.props.type}
        placeholder={this.props.placeHolder}
        defaultValue={this.props.initialValue}
      />
    )
  }
}

export default Input
