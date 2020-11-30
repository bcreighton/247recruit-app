import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Brand from './components/Brand/Brand';
import FollowedAgents from './components/Pages/FollowedAgents/FollowedAgents'
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import AgentProfile from './components/Pages/AgentProfile/AgentProfile';
import AgentSearch from './components/Pages/AgentSearch/AgentSearch';
import Landing from './components/Pages/Landing/Landing'
import Login from './components/Pages/Login/Login'

function App() {
  return (
    <>
      <Nav />
      <Brand />
      <main>
        <Switch>
          <Route 
            path='/agent/:agentId'
            component={AgentProfile} 
          />
          <Route path='/agents' component={FollowedAgents} />
          <Route path='/signin' component={Login} />
          <Route path='/search' component={AgentSearch} />
          <Route path='/' component={Landing} />
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default App;
