import React, { Component } from 'react';
import RecruitContext from '../../../context/RecruitContext';
import RecruitingApiService from '../../../services/recruiting-api-service';

class EditNote extends Component {
    static contextType = RecruitContext;

    state = { 
        id: '',
        title: '',
        content: '',
        username_id: '',
        agent_id: '',
        error: null,
    }

    handleChangeTitle = e => this.setState({ title: e.target.value})
    handleChangeContent = e => this.setState({ content: e.target.value})

    handleSubmit = (e) => {
        e.preventDefault();
        const { id, title, content, username_id, agent_id } = this.state;
        const updatedNote = {
            id,
            title,
            content,
            username_id,
            agent_id,
        }

        this.context.updateNote(updatedNote);
        this.context.resetForm(e.target.title, e.target.content);
        this.props.history.goBack();
    }

    handleClickCancel = () => {
        this.props.history.goBack();
    }

    componentDidMount() {
        RecruitingApiService.getNote(this.props.match.params.noteId)
            .then(note => {
                return this.setState({
                    id: note.id,
                    title: note.title,
                    content: note.content,
                    username_id: note.username_id,
                    agent_id: note.agent_id,
                })
            })
    }

    render() {
        const { title, content } = this.state;

        return (
            <>
                <h1 className="noteTitle">Edit '' Note</h1>
                <form id="editNoteForm" onSubmit={ this.handleSubmit }>
                    <h4 className="formTitle">Enter A New Note</h4>
                    <input 
                        type="text" 
                        id='title' 
                        name='title'
                        value={title}
                        onChange={this.handleChangeTitle}
                    />
                    <label htmlFor="title">Title</label>

                    <textarea 
                        rows='5'
                        cols='100'
                        id='content' 
                        name='content' 
                        value={content}
                        onChange={this.handleChangeContent}
                    />
                    <label htmlFor="content">Content</label>

                    <div className='noteBTNs'>
                        <button type='submit'>Update Note</button>
                        <button className='cancel' onClick={this.handleClickCancel}>Cancel</button>
                    </div>
                </form>
            </>
        )
    }
}

export default EditNote;