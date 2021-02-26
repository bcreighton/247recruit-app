import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import FollowedAgents from './components/Pages/FollowedAgents/FollowedAgents'
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import AgentProfile from './components/Pages/AgentProfile/AgentProfile';
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
    notes: [],
    activeAgent: [],
    followedAgents: [],
    searchSortOption: 'Ascending',
    error: null,
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
      activeAgent: [],
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

  // NOTE FUNCTIONS

  resetNotes = () => {
    return this.setState({
      notes: [],
    })
  }

  setNotes = notes => {
    return this.setState({
      notes,
      error: null,
    })
  }

  agentNotes = (id) => {
    RecruitingApiService.getAgentNotes(id)
      .then(this.setNotes)
      .catch(error => this.setState({ error }))
  }

  resetFollowedAgents = () => {
    return this.setState({
      followedAgents: [],
      error: null,
    })
  }

  getFollowedAgents = userId => {
    RecruitingApiService.getFollowedAgents(userId)
      .then(this.updateFollowedAgents)
  }

  updateFollowedAgents = followedAgents => {
    this.resetFollowedAgents()
    return this.setState({
      followedAgents,
      error: null,
    })
  }

  followAgent = (userId, agentId) => {
    RecruitingApiService.addFollowedAgent(userId, agentId)
    this.getFollowedAgents(userId)
  }

  render() {
    const contextValue = {
      user: this.state.user,
      agents: this.state.agents,
      activeAgent: this.state.activeAgent,
      followedAgents: this.state.followedAgents,
      notes: this.state.notes,
      agentSearch: this.agentSearch,
      searchSortOption: this.state.searchSortOption,
      setSort: this.setSort,
      getAgent: this.getAgent,
      agentNotes: this.agentNotes,
      followAgent: this.followAgent,
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
