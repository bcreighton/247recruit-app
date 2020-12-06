import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import NoteCard from '../components/NoteCard/NoteCard'

describe(`NoteC Card Component`, () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <BrowserRouter>
                <NoteCard />
            </BrowserRouter>, div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})