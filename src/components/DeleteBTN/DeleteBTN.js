import React, { Component } from 'react'
import RecruitContext from '../../context/RecruitContext';

class DeleteBTN extends Component {
  static contextType = RecruitContext;

  state = {
    error: null,
  }

  render() {
    return (
      <button 
        className="delete"
        onClick={() => this.props.handleDeleteClick(this.props.id)}
        >
          Delete
      </button>
    )
  }
}

export default DeleteBTN