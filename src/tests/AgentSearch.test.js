import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AgentSearch from '../components/Pages/AgentSearch/AgentSearch'

describe(`Agent Search Page Component`, () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <BrowserRouter>
                <AgentSearch />
            </BrowserRouter>, div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})