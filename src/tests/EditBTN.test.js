import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import EditBTN from '../components/EditBTN/EditBTN'

// Run tests

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
      <BrowserRouter>
        <EditBTN />
      </BrowserRouter>, 
    div)
  ReactDOM.unmountComponentAtNode(div)
})