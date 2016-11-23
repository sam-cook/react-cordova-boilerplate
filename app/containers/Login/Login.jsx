import React, { Component } from 'react'
import { connect } from 'react-redux'

import { user } from '../../actions'
import Login from '../../components/templates/Login'

class LoginContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleLogin(e) {
    e.preventDefault()
    this.props.login(this.state.username, this.state.password)
  }

  handleChange(e) {
    let change = {}
    change[e.target.id] = e.target.value
    this.setState(change)
  }

  render() {
    return (
      <div className="c-login">
        <Login
          handleLogin={this.handleLogin}
          handleChange={this.handleChange}
          loginError={this.props.loginError}
          loggingIn={this.props.loggingIn}
        />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    loggingIn: state.user.loading,
    loginError: state.user.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => {
      dispatch(user.login(username, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
