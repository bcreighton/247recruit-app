import React, { Component } from 'react'
import Details from '../../Details/Details'
import FollowUp from '../../FollowUp/FollowUp'
import Notes from '../../Notes/Notes'
import './AgentProfile.css'
import RecruitContext from '../../../context/RecruitContext'
import RecruitingApiService from '../../../services/recruiting-api-service'

class AgentProfile extends Component {
  static contextType = RecruitContext;
  static defaultProps = { match: {params:{ agentId: ''}}}

  render() {
    const id = parseInt(this.props.match.params.agentId);
    const agent = this.context.agents.filter(agent => agent.id !== id)
    

    return (
      <>
        <Details agent={agent}
        />
        <FollowUp />
        <Notes agent={agent} />
      </>
    )
  }
}

export default AgentProfile