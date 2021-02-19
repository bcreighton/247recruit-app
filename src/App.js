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
import RecruitingApiService from './services/recruiting-api-service'
import RecrutingApiService from './services/recruiting-api-service';

class App extends Component {
  state = {
    agents: [],
    error: null,
  }

  setAgents = agents => {
    debugger;
    return this.setState({
      agents,
      error: null,
    })
  }

  getAgents = () => {
    RecrutingApiService.getAgents()
      .then(this.setAgents)
      .catch(error => this.setState({ error }))
  }

  componentDidMount() {
    this.getAgents();
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
