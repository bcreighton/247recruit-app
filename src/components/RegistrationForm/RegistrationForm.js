import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './RegistrationForm.css'

class RegistrationForm extends Component {
  render() {
      const { name, email } = this.props;

    return (
      <section className='container'>
        <form action="" id='registrationForm'>
          <input 
            type="text" 
            id='name' 
            name='user_name' 
            value={name}
        />
          <label htmlFor="name">Name</label>

          <input 
            type="email" 
            id='email' 
            name='user_email' 
            value={email}
        />
          <label htmlFor="email">Email</label>

          <input 
            type="password" 
            id='password' 
            name='user_password' 
        />
          <label htmlFor="password">Password</label>

          <button type='submit'><Link to='/search'>Get Started!!!</Link></button>
        </form>
      </section>
    )
  }
}

export default RegistrationForm