import React from 'react'
import Brand from './components/Brand/Brand';
import FollowedAgents from './components/Pages/FollowedAgents/FollowedAgents'
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import AgentProfile from './components/Pages/AgentProfile/AgentProfile';

function App() {
  return (
    <>
      <Nav />
      <Brand />
      <main>
        <AgentProfile
          agent={
            {
              name: 'Susie Q',
              contact: {
                phone: '713-123-1234',
                email: 'susie@kw.com',
              },
              office: {
                name: 'Keller Williams',
                address: '123 Main St. Houston, TX'
              },
              vol: '10,000,000',
              trans: '31',
              exp: '22',
            }
          }
        />
      </main>
      <Footer />
    </>
  )
}

export default App;
