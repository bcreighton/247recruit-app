import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import DeleteBTN from '../components/DeleteBTN/DeleteBTN'

// Run tests

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
      <BrowserRouter>
        <DeleteBTN />
      </BrowserRouter>, 
    div)
  ReactDOM.unmountComponentAtNode(div)
})