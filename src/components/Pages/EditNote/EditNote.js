import React, { Component } from 'react';
import RecruitContext from '../../../context/RecruitContext';
import EditBTN from '../../EditBTN/EditBTN';

class EditNote extends Component {
    render() {
        return (
            <>
                <h1 className="noteTitle">Edit '' Note</h1>
                <form id="editNoteForm">
                    <h4 className="formTitle">Enter A New Note</h4>
                    <input 
                        type="text" 
                        id='title' 
                        name='title'
                        value={this.props.title}
                    />
                    <label htmlFor="title">Title</label>

                    <input 
                        type="content" 
                        id='content' 
                        name='content' 
                        value={this.props.content}
                    />
                    <label htmlFor="content">Content</label>

                    <button type='submit'>Save</button>
                </form>
            </>
        )
    }
}

export default EditNote;