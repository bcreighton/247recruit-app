import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import FollowedAgents from './components/Pages/FollowedAgents/FollowedAgents'
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import AgentProfile from './components/Pages/AgentProfile/AgentProfile';
import EditNote from './components/Pages/EditNote/EditNote';
import AgentSearch from './components/Pages/AgentSearch/AgentSearch';
import Landing from './components/Pages/Landing/Landing'
import Login from './components/Pages/Login/Login'
import PageNotFound from './components/Pages/PageNotFound/PageNotFound';
import './reset.css'
import './App.css'
import RecruitContext from './context/RecruitContext';
import RecruitingApiService from './services/recruiting-api-service';

class App extends Component {
  state = {
    user: {id: 15},
    agents: [],
    activeAgent: {},
    agentNotes: [],
    activeNote: {},
    followedAgents: [],
    searchSortOption: 'Ascending',
    error: null,
  }

  // FORM RESET
  resetForm = (...fields) => {
    fields.map(field => field.value = '')
  }

  // AGENT SEARCH FUNCTIONS
  resetAgents = () => {
    return this.setState({
      agents: [],
    })
  }

  setAgents = agents => {
    this.resetAgents()
    return this.setState({
      agents,
      error: null,
    })
  }

  setSort = searchSortOption => {
    return this.setState({
      searchSortOption,
      error: null,
    })
  }

  agentSearch = (search) => {
    RecruitingApiService.getAgents(search, this.state.searchSortOption)
      .then(this.setAgents)
      .catch(error => this.setState({ error }))
  }

  resetActiveAgent = () => {
    return this.setState({
      activeAgent: {},
    })
  }

  setActiveAgent = activeAgent => {
    this.resetActiveAgent()
    
    return this.setState({
      activeAgent,
      error: null,
    })
  }

  getAgent = (id) => {
    RecruitingApiService.getAgent(id)
      .then(this.setActiveAgent)
      .catch(error => this.setState({ error }))
  }

  // FOLLOWED AGENTS

  resetFollowedAgents = () => {
    return this.setState({
      followedAgents: [],
      error: null,
    })
  }

  updateFollowedAgents = followedAgents => {
    this.resetFollowedAgents()
    return this.setState({
      followedAgents,
      error: null,
    })
  }

  getFollowedAgents = userId => {
    RecruitingApiService.getFollowedAgents(userId)
      .then(this.updateFollowedAgents)
  }

  followAgent = (userId, agentId) => {
    RecruitingApiService.addFollowedAgent(userId, agentId)
      .then(newFollow => {
        
        this.setState({
          followedAgents: [newFollow, ...this.state.followedAgents]
        })
      })
      .catch(error => this.setState({ error }))
  }

  unfollowAgent = (userId, agentId) => {
    RecruitingApiService.deleteFollowedAgent(userId, agentId)
      .then(unfollowedAgentId => {
        
        const updatedFollowedAgents = this.state.followedAgents.filter(agent => 
          agent.id !== unfollowedAgentId
          )

        this.setState({
          followedAgents:updatedFollowedAgents
        })
      })
      .catch(error => this.setState({ error }))
  }

  // NOTES

  resetAgentNotes = () => {
    return this.setState({
      agentNotes: [],
      error: null,
    })
  }

  setAgentNotes = agentNotes => {
    this.resetAgentNotes()
    return this.setState({
      agentNotes,
      error: null,
    })
  }

  getAgentNotes = (agentId) => {
    RecruitingApiService.getAgentNotes(agentId)
      .then(this.setAgentNotes)
      .catch(error => this.setState({ error }))
  }

  addNote = newNote => {
    RecruitingApiService.addNote(newNote)
      .then((note) => { 
        this.setState({
          agentNotes: [note, ...this.state.agentNotes]
        })
      })
      .catch(error=> this.setState({ error }))
  }

  resetActiveNote = () => {
    return this.setState({
      activeNote: {},
      error: null,
    })
  }

  setActiveNote = (activeNote) => {
    this.resetActiveNote()
    return this.setState({
      activeNote,
      error: null,
    })
  }

  getNote = (noteId) => {
    RecruitingApiService.getNote(noteId)
      .then(this.setActiveNote)
      .catch(error => this.setState({ error }))
  }

  updateNote = noteToBeUpdated => {
    RecruitingApiService.updateNote(noteToBeUpdated)
      .then(updatedNote => {
        this.setState(prevState => ({
          agentNotes: prevState.agentNotes.map(note => {
            return (note.id === updatedNote.id)
              ? updatedNote
              : note
          })
        }))
      })
      .catch(error => this.setState({ error }))
  }

  deleteNote = noteIdToBeDeleted => {
    RecruitingApiService.deleteNote(noteIdToBeDeleted)
      .then(id => {
        const updatedNotes = this.state.agentNotes.filter(note => 
          note.id !== id
          )

        this.setState({
          agentNotes: updatedNotes,
          error: null,
        })
      })
      .catch(error => this.setState({ error }))
  }

  componentDidMount() {
    (this.state.user.id) && this.getFollowedAgents(this.state.user.id)
  }

  render() {
    const contextValue = {
      resetForm: this.resetForm,
      user: this.state.user,
      agents: this.state.agents,
      activeAgent: this.state.activeAgent,
      followedAgents: this.state.followedAgents,
      notes: this.state.notes,
      agentSearch: this.agentSearch,
      searchSortOption: this.state.searchSortOption,
      setSort: this.setSort,
      getAgent: this.getAgent,
      getFollowedAgents: this.getFollowedAgents,
      followAgent: this.followAgent,
      unfollowAgent: this.unfollowAgent,
      followToggle: this.followToggle,
      getNote: this.getNote,
      getAgentNotes: this.getAgentNotes,
      addNote: this.addNote,
      agentNotes: this.state.agentNotes,
      activeNote: this.state.activeNote,
      updateNote: this.updateNote,
      deleteNote: this.deleteNote
    }

    return (
      <div className='App'>
        <RecruitContext.Provider value={ contextValue }>
          <Nav />
          <main>
            <Switch>
              <Route 
                path='/agent/:agentId'
                component={AgentProfile} 
              />
              <Route
                path='/note/edit/:noteId'
                component={EditNote}
              />
              <Route path='/agents' component={FollowedAgents} />
              <Route path='/signin' component={Login} />
              <Route path='/search' component={AgentSearch} />
              <Route path='/' exact component={Landing} />
              <Route component={PageNotFound} />
            </Switch>
          </main>
          <Footer />
        </RecruitContext.Provider>
      </div>
    )
  }
}

export default App;
