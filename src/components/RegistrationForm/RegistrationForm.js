import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class RegistrationForm extends Component {
  render() {
    return (
      <section className='container'>
        <form action="" id="registration">
          <label htmlFor="name">Name:</label>
          <input type="text" id='name' name='user_name' />

          <label htmlFor="email">Email:</label>
          <input type="email" id='email' name='user_email' />

          <label htmlFor="password">Password:</label>
          <input type="password" id='password' name='user_password' />

          <button type='submit'><Link to='/search'>Get Started!!!</Link></button>
        </form>
      </section>
    )
  }
}

export default RegistrationForm