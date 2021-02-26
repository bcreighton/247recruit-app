import React, { Component } from 'react'
import NoteCard from '../NoteCard/NoteCard'
import notes from '../../mockData/notesData'
import agents from '../../mockData/agentsData'
import NoteForm from '../NoteForm/NoteForm'
import RecruitContext from '../../context/RecruitContext'

class Notes extends Component {
  static contextType = RecruitContext;

  getNotesByAgent(id) {
    this.context.agentNotes(id)
  }

  generateNotesList(notes) {
    return this.getNotesByAgent(notes).map(note => (
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

  render() {
    const agentId = this.context.activeAgent.id;
    

    return (
      <section className="container notes">
        <h2 className="sectionHead">Notes</h2>
        <hr />
        <NoteForm />

        <ul className='noteList'>
          {this.generateNotesList(this.getNotesByAgent(agentId))}
        </ul>
      </section>
    )
  }
}

export default Notes