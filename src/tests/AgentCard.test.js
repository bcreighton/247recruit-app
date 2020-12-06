import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AgentCard from '../components/AgentCard/AgentCard'

// Run tests

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <AgentCard 
        id={1}
        name={`John Smith`}
        office_name={'KW'}
        vol={4000000}
        trans={22}
        exp={5}
      />
    </BrowserRouter>, div
    )
  ReactDOM.unmountComponentAtNode(div)
})