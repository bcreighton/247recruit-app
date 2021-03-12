import React, { Component } from 'react'
import RecruitContext from '../../context/RecruitContext'
import './NoteForm.css'

class NoteForm extends Component {
  static contextType = RecruitContext;

  state = {
    error: null,
  }

  render() {
    return (
      <section className='container'>
        <form id="note" onSubmit={e => this.props.handleNoteSubmit(e)}>
          <h4 className="formTitle">Enter A New Note</h4>
          <input type="text" id='title' name='title' />
          <label htmlFor="title">Title</label>

          <input type="content" id='content' name='content' />
          <label htmlFor="content">Content</label>

          <button type='submit'>Save</button>
        </form>
      </section>
    )
  }
}

export default NoteForm