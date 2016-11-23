import React, { Component, PropTypes } from 'react'

class Image extends Component {

  constructor(props) {
    super(props)

    this.styles = this.styles.bind(this)
  }

  static propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string
  }

  static defaultProps = {
    width: '100%'
  }

  styles() {
    if (this.props.noStyles) return {}

    return {
      width: this.props.width,
      height: this.props.height
    }
  }

  render() {
    const classes = `a-image ${this.props.className ? this.props.className : ''}`
    return (
      <img
        className={classes}
        src={this.props.src}
        style={this.styles()}
      />
    )
  }

}

export default Image
