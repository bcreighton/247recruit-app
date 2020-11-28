import React from 'react'
import Brand from './components/Brand/Brand';
import FollowedAgents from './components/Pages/FollowedAgents/FollowedAgents'
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import AgentProfile from './components/Pages/AgentProfile/AgentProfile';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  return (
    <>
      <Nav />
      <Brand />
      <main>
        <SearchResults />
      </main>
      <Footer />
    </>
  )
}

export default App;
