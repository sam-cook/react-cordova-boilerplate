import './checkbox.scss'
import React, { Component, PropTypes } from 'react'

class Checkbox extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool
  }

  static defaultProps = {
    type: 'text',
    checked: false
  }

  render() {
    return(
      <input
        id={this.props.id}
        className="a-checkbox"
        onChange={this.props.changeHandler}
        type="checkbox"
        defaultChecked={this.props.checked}
      />
    )
  }
}

export default Checkbox
