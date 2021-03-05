import React, { Component } from 'react'
import DeleteBTN from '../DeleteBTN/DeleteBTN'
import EditBTN from '../EditBTN/EditBTN'
import './NoteCard.css'

class NoteCard extends Component {
  state = {
    error: null,
  }


  render() {
    return (
      <div className="noteCard">
        <h3 className="noteTitle">{this.props.title}</h3>
        <h4 className="noteDate">{this.props.timestamp}</h4>
        <div className="noteContent">
          {this.props.content}
        </div>
        <div className="noteBTNs">
          <EditBTN id={this.props.id} title={this.props.title} content={this.props.content}/>
          <DeleteBTN id={this.props.id}/>
        </div>
      </div>
    )
  }
}

export default NoteCard