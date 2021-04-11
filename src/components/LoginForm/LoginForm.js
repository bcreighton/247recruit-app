import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import './LoginForm.css'

class LoginForm extends Component {

  state = {
    error: null,
  }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault();
    const { loginForm_username, loginForm_password } = ev.target

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(loginForm_username.value, loginForm_password.value)
    )
  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })

    const { loginForm_username, loginForm_password } = ev.target;

    AuthApiService.postLogin({
      username: loginForm_username.value,
      password: loginForm_password.value,
    })
      .then(res => {
        loginForm_username.value = ''
        loginForm_password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.handleLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    return (
      <section className='container'>
        <form 
          id="login"
          onSubmit={this.handleSubmitJwtAuth}
        >
          <input required type="username" id='loginForm_username' name='username' />
          <label htmlFor="loginForm_username">Username</label>

          <input required type="password" id='loginForm_password' name='user_password' />
          <label htmlFor="loginForm_password">Password</label>

          <button><Link to='/register'>Register</Link></button>
          <button type='submit'>Sign In</button>
        </form>
      </section>
    )
  }
}

export default LoginForm