import React, { Component } from 'react'
import NoteCard from '../NoteCard/NoteCard'
import notes from '../../mockData/notesData'
import agents from '../../mockData/agentsData'
import NoteForm from '../NoteForm/NoteForm'
import RecruitContext from '../../context/RecruitContext'
import RecruitingApiService from '../../services/recruiting-api-service'

class Notes extends Component {
  static contextType = RecruitContext;

  state = {
    notes: [],
    error: null,
  }

  
  generateNotesList(notes) {
    debugger;
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

  componentDidMount() {
    RecruitingApiService.getNotes(this.props.agent.id)
      .then(res => this.setState({
        notes: [res],
        errro: null,
    }))
    .catch(error => this.setState({ error }))
  }


  render() {
    return (
      <section className="container notes">
        <h2 className="sectionHead">Notes</h2>
        <hr />
        <NoteForm />

        <ul className='noteList'>
          {this.generateNotesList(this.state.notes)}
        </ul>
      </section>
    )
  }
}

export default Notes