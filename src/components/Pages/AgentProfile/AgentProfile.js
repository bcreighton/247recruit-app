import React, { Component } from 'react'
import Details from '../../Details/Details'
import FollowUp from '../../FollowUp/FollowUp'
import Notes from '../../Notes/Notes'
import agents from '../../../mockData/agentsData'

class AgentProfile extends Component {

  getAgentId(agents) {
    return agents.find(agent => {
      return agent.id.toString() === this.props.match.params.agentId
    })
  }

  render() {
    const selected_agent = this.getAgentId(agents)

    return (
      <>
        <Details
          agent={selected_agent}
        />
        <FollowUp />
        <Notes agent_id={selected_agent.id} />
      </>
    )
  }
}

export default AgentProfile