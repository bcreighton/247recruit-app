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

  state = {
    error: null
  }

  componentDidMount() {
    this.context.getAgent(parseInt(this.props.match.params.agentId))
    this.context.getAgentNotes(parseInt(this.props.match.params.agentId))
  }

  renderAgent(agent) {
    return (
      <>
        <Details />
        <FollowUp />
        <Notes />
      </>
    )
  }

  render() {
    
    return this.context.activeAgent !== {} ? this.renderAgent(this.context.activeAgent)
    : ( <span>Loading agent details...</span> )
  }
}

export default AgentProfile