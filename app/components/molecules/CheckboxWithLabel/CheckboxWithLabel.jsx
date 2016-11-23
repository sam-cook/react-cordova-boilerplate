import './checkboxWithLabel.scss'

import React, { Component, PropTypes } from 'react'

import Label from '../../atoms/Label'
import Checkbox from '../../atoms/Checkbox'


class CheckboxWithLabel extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired,
    checked: PropTypes.string,
    for: PropTypes.string
  }

  render() {
    return(
      <div className="m-checkbox-label">
        <Checkbox
          checked={this.props.checked}
          id={this.props.id}
          changeHandler={this.props.changeHandler}
        />
        <Label
          for={this.props.id}
          text={this.props.labelText}
        />
      </div>
    )
  }
}

export default CheckboxWithLabel
