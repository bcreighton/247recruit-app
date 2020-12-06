import React, { Component } from 'react'
import DeleteBTN from '../DeleteBTN/DeleteBTN'
import EditBTN from '../EditBTN/EditBTN'
import './NoteCard.css'

class NoteCard extends Component {
  render() {
    return (
      <div className="noteCard">
        <h3 className="noteTitle">{this.props.title}</h3>
        <h4 className="noteDate">{this.props.date}</h4>
        <div className="noteContent">
          {this.props.content}
        </div>
        <div className="noteBTNs">
          <EditBTN />
          <DeleteBTN />
        </div>
      </div>
    )
  }
}

export default NoteCard