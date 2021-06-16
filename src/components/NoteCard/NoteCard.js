import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import DeleteBTN from '../DeleteBTN/DeleteBTN'
import EditBTN from '../EditBTN/EditBTN'
import RecruitContext from '../../context/RecruitContext';
import './NoteCard.css'

class NoteCard extends Component {
  static contextType = RecruitContext;

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
          <Link to={`/note/edit/${this.props.id}`}>
            <EditBTN />
          </Link>

          <DeleteBTN id={this.props.id} handleDeleteClick={this.props.handleDeleteClick}/>
        </div>
      </div>
    )
  }
}

export default NoteCard