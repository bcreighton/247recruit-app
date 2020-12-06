import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import AgentProfile from '../components/Pages/AgentProfile/AgentProfile'
import agents from '../mockData/agentsData'

describe(`Agent Profile Component`, () => {

    it('renders without crashing', () => {
        let AgentData = renderer.create(<AgentProfile />).getInstance()

        selected_agent = AgentData.getAgentId(agents)

        const div = document.createElement('div')
        ReactDOM.render(
            <BrowserRouter>
                <AgentProfile />
            </BrowserRouter>, div)
        ReactDOM.unmountComponentAtNode(div)
    })   
})
