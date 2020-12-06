import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Brand from '../components/Brand/Brand'

// Run tests

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
      <BrowserRouter>
        <Brand />
      </BrowserRouter>, 
    div)
  ReactDOM.unmountComponentAtNode(div)
})