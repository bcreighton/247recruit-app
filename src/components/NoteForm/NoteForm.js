import React, { Component } from 'react'
import RecruitContext from '../../context/RecruitContext'
import './NoteForm.css'

class NoteForm extends Component {
  static contextType = RecruitContext;

  // state = {
  //   error: null,
  // }

  render() {

    const { error } = this.context;
    

    return (
      <section className='container'>
        <div className="error" role='alert'>
          {error && <p>{ error.error.message }</p>}
        </div>
        <form id="note" onSubmit={e => this.props.handleNoteSubmit(e)}>
          <h4 className="formTitle">Enter A New Note</h4>
          <input type="text" id='title' name='title' />
          <label htmlFor="title">Title</label>

          <input type="content" id='content' name='content' />
          <label htmlFor="content">Content</label>
          <div className="btnContainer">
            <button type='submit'>Save</button>
          </div>
        </form>
      </section>
    )
  }
}

export default NoteForm