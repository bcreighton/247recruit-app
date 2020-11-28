import React, { Component } from 'react'

class NoteForm extends Component {
  render() {
    return (
      <section className='container'>
        <form action="" id="note">
          <label htmlFor="title">Title:</label>
          <input type="text" id='title' name='note_title' />

          <label htmlFor="content">Content:</label>
          <input type="content" id='content' name='note_content' />

          <button type='submit'>Save</button>
        </form>
      </section>
    )
  }
}

export default NoteForm