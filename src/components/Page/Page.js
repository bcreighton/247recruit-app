import React, { Component } from 'react'
import AgentCard from '../AgentCard/AgentCard'
import Brand from '../Brand/Brand'
import Nav from '../Nav/Nav'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import SearchForm from '../SearchForm/SearchForm'

class Page extends Component {
  render() {
    return (
      <main className='page'>
        <Brand />
        <Nav />
        <RegistrationForm />
        <SearchForm />
        
      </main>
    )
  }
}

export default Page