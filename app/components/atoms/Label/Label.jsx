import './label.scss'
import React, { Component, PropTypes } from 'react'

class Label extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    for: PropTypes.string
  }

  render() {
    return(
      <label className="a-label" htmlFor={this.props.for}>
        {this.props.text}
      </label>
    )
  }
}

export default Label
