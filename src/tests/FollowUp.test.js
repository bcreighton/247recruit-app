import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import FollowUp from '../components/FollowUp/FollowUp'

describe(`Follow Up Component`, () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <BrowserRouter>
                <FollowUp />
            </BrowserRouter>, div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})