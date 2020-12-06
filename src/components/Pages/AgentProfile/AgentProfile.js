import React, { Component } from 'react'
import Details from '../../Details/Details'
import FollowUp from '../../FollowUp/FollowUp'
import Notes from '../../Notes/Notes'
import agents from '../../../mockData/agentsData'
import './AgentProfile.css'

class AgentProfile extends Component {
  static defaultProps = { match: {params:{ agentId: ''}}}

  getAgentId(agents) {
    const urlId = this.props.match.params.agentId

    if (urlId) {
      return agents.find(agent => {
        return agent.id.toString() === urlId
      })
    }
  }

  render() {
    const selected_agent = this.getAgentId(agents)

    return (
      <>
        <Details
          agent={selected_agent}
        />
        <FollowUp />
        <Notes agent={selected_agent} />
      </>
    )
  }
}

export default AgentProfile