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
import AgentContext from './context/AgentContext';

class App extends Component {
  state = {
    agentMlsData: [],
    agentLicenseData: [],
    error: null,
  }

  setMlsData = agentMlsData => {
    this.setState({
      agentMlsData,
      error: null,
    })
  }

  setLicenseData = agentLicenseData => {
    this.setState({
      agentLicenseData,
      error: null,
    })
  }

  getMlsData = () => {
    fetch(config.API_ENDPOINT + 'mlsData', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if(!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(this.setMlsData)
      .catch(error => this.setState({ error }))
  }

  getLicenseData = () => {
    fetch(config.API_ENDPOINT + 'licenseData', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if(!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(this.setLicenseData)
      .catch(error => this.setState({ error }))
  }

  componentDidMount() {
    this.getMlsData()
    this.getLicenseData()
  }

  render() {
    const contextValue = {
      agentMlsData: this.state.agentMlsData,
      agentLicenseData: this.state.agentLicenseData,
    }

    return (
      <div className='App'>
        <AgentContext.Provider value={ contextValue }>
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
        </AgentContext.Provider>
      </div>
    )
  }
}

export default App;
