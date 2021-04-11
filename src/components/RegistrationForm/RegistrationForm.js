import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import './RegistrationForm.css'

class RegistrationForm extends Component {

  handleSubmit = ev => {
    ev.preventDefault();
    const {reg_name, reg_username, reg_email, reg_password } = ev.target;
    
    console.log('registration submitted');
    console.log({reg_name, reg_username, reg_email, reg_password})
  }

  render() {
      const { name, email } = this.props;

    return (
      <section className='container'>
        <form onSubmit={this.handleSubmit} id='registrationForm'>
          <input 
            type="text" 
            id='name' 
            name='reg_name' 
            defaultValue={name}
          />
          <label htmlFor="name">Name</label>

          <input 
            type="text" 
            id='username' 
            name='reg_usernname' 
          />
          <label htmlFor="username">Username</label>

          <input 
            type="email" 
            id='email' 
            name='reg_email' 
            defaultValue={email}
          />
          <label htmlFor="email">Email</label>

          <input 
            type="password" 
            id='password' 
            name='reg_password' 
          />
          <label htmlFor="password">Password</label>

          <button type='submit'>Register</button>
        </form>
      </section>
    )
  }
}

export default RegistrationForm