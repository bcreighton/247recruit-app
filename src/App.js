import React from 'react'
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

function App() {
  return (
    <div className='App'>
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
    </div>
  )
}

export default App;
