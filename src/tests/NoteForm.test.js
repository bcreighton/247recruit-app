import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import NoteForm from '../components/NoteForm/NoteForm'

describe(`Note From Component`, () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <BrowserRouter>
                <NoteForm />
            </BrowserRouter>, div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})