import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LoginForm.css'

class LoginForm extends Component {
  render() {
    return (
      <section className='container'>
        <form action="" id="login">

          <input type="email" id='email' name='user_email' />
          <label htmlFor="email">Email</label>

          <input type="password" id='password' name='user_password' />
          <label htmlFor="password">Password</label>

          <button type='submit'><Link to='/agents'>Sign In</Link></button>
        </form>
      </section>
    )
  }
}

export default LoginForm