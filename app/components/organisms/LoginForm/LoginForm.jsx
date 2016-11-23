import './loginForm.scss'

import React, { Component, PropTypes } from 'react'

import InputWithLabel from '../../molecules/InputWithLabel'
import CheckboxWithLabel from '../../molecules/CheckboxWithLabel'
import Button from '../../atoms/Button'

class LoginForm extends Component {

  constructor(props) {
    super(props)
  }

  static propTypes = {
    handleLogin: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
  }

  errorMessage(error) {
    return (
      <p>{error}</p>
    )
  }

  render() {
    const { loginError } = this.props
    return(
      <form className="o-login-form" onSubmit={this.props.handleLogin}>
        <h1>Log in</h1>
        <InputWithLabel
          changeHandler={this.props.handleChange}
          type="text"
          labelText="username"
          id="username"
        />
        <InputWithLabel
          changeHandler={this.props.handleChange}
          type="password"
          labelText="password"
          id="password"
        />
        {loginError && this.errorMessage(loginError)}
        <CheckboxWithLabel
          changeHandler={this.props.handleChange}
          labelText="Remember me"
          id="rememberMe"
        />
        <div className="col-sm-offset-6 col-sm-6">
          <Button type="submit" text="Login" />
        </div>
      </form>
    )
  }
}

export default LoginForm
