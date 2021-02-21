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
import RecrutingApiService from './services/recruiting-api-service';

class App extends Component {
  state = {
    agents: [],
    searchSortOption: 'Transactions',
    error: null,
  }

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
    
    RecrutingApiService.getAgents(search, this.state.searchSortOption)
      .then(this.setAgents)
      .catch(error => this.setState({ error }))
  }

  render() {
    const contextValue = {
      agents: this.state.agents,
      agentSearch: this.agentSearch,
      searchSortOption: this.state.searchSortOption,
      setSort: this.setSort,
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
