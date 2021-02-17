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
import config from './config';
import './reset.css'
import './App.css'
import RecruitContext from './context/RecruitContext';

class App extends Component {
  state = {
    agents: [],
    error: null,
  }

  setAgents = agents => {
    this.setState({
      agents,
      error: null,
    })
  }

  getAgents = () => {
    fetch(config.API_ENDPOINT + 'agent', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`,
      }
    })
      .then(res => {
        if(!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(this.setAgents)
      .catch(error => this.setState({ error }))
  }

  componentDidMount() {
    this.getAgents()
  }

  render() {
    const contextValue = {
      agents: this.state.agents,
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
