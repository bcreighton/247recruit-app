import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './GetStartedForm.css'

class GetStartedForm extends Component {
    state = { 
        name:'',
        email:'',
    }

    handleChangeName = e => this.setState({ name: e.target.value})
    handleChangeEmail = e => this.setState({ email: e.target.value})

  render() {
    const location = {
      pathname: '/register',
      state: this.state,
    }

    return (
      <section className='container'>
        <form action="" id={this.props.id}>
          <input
            type="text"
            id={this.props.nameId}
            name='user_name'
            onChange={this.handleChangeName}
          />
          <label htmlFor="name">Name</label>

          <input
            type="email"
            id={this.props.emailId}
            name='user_email'
            onChange={this.handleChangeEmail}
          />
          <label htmlFor="email">Email</label>

          <button type='submit'>
            <Link to={location} >
              Get Started!!!
            </Link>
          </button>
        </form>
      </section>
    )
  }
}

export default GetStartedForm