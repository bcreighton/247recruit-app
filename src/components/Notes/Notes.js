import React, { Component } from 'react'
import NoteCard from '../NoteCard/NoteCard'
import NoteForm from '../NoteForm/NoteForm'
import RecruitContext from '../../context/RecruitContext'

class Notes extends Component {
  static contextType = RecruitContext;

  state = {
    notes: this.context.agentNotes,
    error: null,
  }

  handleNoteSubmit = e => {
    
    e.preventDefault();
    const {title, content} = e.target;

    const newNote = {
      title: title.value,
      content: content.value,
      username_id: this.context.user.id,
      agent_id: parseInt(this.context.activeAgent.id),
    }

    this.context.addNote(newNote);
    this.context.resetForm(title, content);
  }


  
  generateNotesList(notes) {
    return notes.map(note => (
      <li className='noteListItem' key={note.id}>
        <NoteCard
          id={note.id}
          title={note.title}
          content={note.content}
          date={note.date}
          agent_id={note.agent_id}
          user_id={note.user_id}
        />
      </li>
    ))
  }

  renderNotes() {
    return (
      <section className="container notes">
        <h2 className="sectionHead">Notes</h2>
        <hr />
        <NoteForm 
          handleNoteSubmit = {this.handleNoteSubmit}
        />

        <ul className='noteList'>
          {this.generateNotesList(this.context.agentNotes)}
        </ul>
      </section>
    )
  }

  componentWillUnmount() {
    this.context.getAgentNotes(parseInt(this.context.activeAgent.id))
  }


  render() {
    
    return this.context.agentNotes.length ? this.renderNotes()
    : ( 
        <>
          <hr />
          <NoteForm 
            handleNoteSubmit = {this.handleNoteSubmit}
          />
          <span>You have no notes for this agent.</span>
        </>
      )
  }
}

export default Notes