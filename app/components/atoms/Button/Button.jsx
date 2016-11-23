import './button.scss'
import React, { Component, PropTypes } from 'react'

class Button extends Component {

  static propTypes = {
    clickHandler: PropTypes.func,
    type: PropTypes.string,
    text: PropTypes.string,
    hollow: PropTypes.bool,
    disabled: PropTypes.bool,
    classes: PropTypes.string
  }

  static defaultProps = {
    type: 'button',
    classes: ''
  }

  render() {
    const classes = `${this.props.classes} a-button ${this.props.hollow ? 'hollow' : ''}`
    return(
      <button
        className={classes}
        onClick={this.props.clickHandler}
        type={this.props.type}
        disabled={this.props.disabled}
      >
        {this.props.text}
      </button>
    )
  }
}

export default Button
