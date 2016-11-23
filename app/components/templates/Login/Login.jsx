import './login.scss'

import React, { Component, PropTypes } from 'react'

import LoginForm from '../../organisms/LoginForm'
import Header from '../../organisms/Header'


class Login extends Component {

  constructor(props) {
    super(props)
  }

  static propTypes = {
    handleLogin: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="t-login">
        <Header />
        <div className="container">
          {this.props.loggingIn && <h1>LOGGING YOU IN</h1>}
          <LoginForm {...this.props} />
        </div>
      </div>
    )
  }

}

export default Login
