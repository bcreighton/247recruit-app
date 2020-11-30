import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LoginForm extends Component {
  render() {
    return (
      <section className='container'>
        <form action="" id="login">

          <label htmlFor="email">Email:</label>
          <input type="email" id='email' name='user_email' />

          <label htmlFor="password">Password:</label>
          <input type="password" id='password' name='user_password' />

          <button type='submit'><Link to='/agents'>Sign In</Link></button>
        </form>
      </section>
    )
  }
}

export default LoginForm