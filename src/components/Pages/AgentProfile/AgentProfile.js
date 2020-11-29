import React, { Component } from 'react'
import Details from '../../Details/Details'
import FollowUp from '../../FollowUp/FollowUp'
import Notes from '../../Notes/Notes'
import agents from '../../../mockData/agentsData'

class AgentProfile extends Component {

  getAgent(agents) {
    return agents.find(agent => {
      return agent.id === 374
    })
  }

  render() {
    const selectedAgent = this.getAgent(agents)
    

    return (
      <>
        <Details
          agent={selectedAgent}
        />
        <FollowUp />
        <Notes agent_id={selectedAgent.id} />
      </>
    )
  }
}

export default AgentProfile