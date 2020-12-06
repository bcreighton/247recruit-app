import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import FollowedAgents from '../components/Pages/FollowedAgents/FollowedAgents'

// Run tests

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
      <BrowserRouter>
        <FollowedAgents />
      </BrowserRouter>, 
    div)
  ReactDOM.unmountComponentAtNode(div)
})