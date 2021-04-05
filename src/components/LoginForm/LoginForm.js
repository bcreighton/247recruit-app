import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service';
import './LoginForm.css'

class LoginForm extends Component {

  handleSubmitBasicAuth = ev => {
    
    ev.preventDefault();
    const { loginForm_username, loginForm_password } = ev.target

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(loginForm_username.value, loginForm_password.value)
    )
  }

  render() {
    return (
      <section className='container'>
        <form 
          id="login"
          onSubmit={this.handleSubmitBasicAuth}
        >
          <input required type="username" id='loginForm_username' name='username' />
          <label htmlFor="loginForm_username">Username</label>

          <input required type="password" id='loginForm_password' name='user_password' />
          <label htmlFor="loginForm_password">Password</label>

          <button type='submit'>Sign In</button>
        </form>
      </section>
    )
  }
}

export default LoginForm