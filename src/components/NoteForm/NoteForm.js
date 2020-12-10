import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component {
  render() {
    return (
      <section className='container'>
        <form action="" id="note">
          <h4 className="formTitle">Enter A New Note</h4>
          <input type="text" id='title' name='note_title' />
          <label htmlFor="title">Title</label>

          <input type="content" id='content' name='note_content' />
          <label htmlFor="content">Content</label>

          <button type='submit'>Save</button>
        </form>
      </section>
    )
  }
}

export default NoteForm