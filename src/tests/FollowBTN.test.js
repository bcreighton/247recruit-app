import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import FollowBTN from '../components/FollowBTN/FollowBTN'

// Run tests

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
      <BrowserRouter>
        <FollowBTN />
      </BrowserRouter>, 
    div)
  ReactDOM.unmountComponentAtNode(div)
})