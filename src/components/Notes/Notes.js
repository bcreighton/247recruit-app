import React, { Component } from 'react'
import NewNoteBTN from '../NewNoteBTN/NewNoteBTN'
import NoteCard from '../NoteCard/NoteCard'

class Notes extends Component {
  render() {
    return (
      <section className="container notes">
        <h2 className="sectionHead">Notes</h2>
        <hr />
        <NewNoteBTN />

        <ul className='noteList'>
          <li className="noteListItem">
            <NoteCard
              title='Note 1'
              content='Lorem ipsum dolor sit.'
            />
          </li>
          <li className="noteListItem">
            <NoteCard
              title='Note 2'
              content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque possimus totam provident, dolorum facilis. Distinctio voluptate doloremque dicta consequuntur ipsam possimus accusantium ea, commodi, aliquid minus quo amet ullam numquam nobis iste, debitis ducimus pariatur! Omnis assumenda aspernatur odio?'
            />
          </li>
          <li className="noteListItem">
            <NoteCard
              title='Note 3'
              content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae provident soluta, assumenda vel nobis eius sed ut dignissimos quisquam error illo aperiam debitis voluptatibus.'
            />
          </li>
          <li className="noteListItem">
            <NoteCard
              title='Note 4'
              content='Lorem ipsum dolor sit.'
            />
          </li>
          <li className="noteListItem">
            <NoteCard
              title='Note 5'
              content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, necessitatibus.'
            />
          </li>
        </ul>
      </section>
    )
  }
}

export default Notes