import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Notes from '../components/Notes/Notes'

describe(`Notes Component`, () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <BrowserRouter>
                <Notes 
                    agent={{id:1}}
                />
            </BrowserRouter>, div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})