import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'

// Run tests

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
      <BrowserRouter>
        <RegistrationForm />
      </BrowserRouter>, 
    div)
  ReactDOM.unmountComponentAtNode(div)
})