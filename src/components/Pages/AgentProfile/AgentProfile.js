import React, { Component } from 'react'
import Details from '../../Details/Details'
import FollowUp from '../../FollowUp/FollowUp'
import Notes from '../../Notes/Notes'
import './AgentProfile.css'
import RecruitContext from '../../../context/RecruitContext'

class AgentProfile extends Component {
  static contextType = RecruitContext;
  static defaultProps = { match: {params:{ agentId: ''}}}

  state = {
    error: null
  }

  componentDidMount() {
    this.context.getAgent(parseInt(this.props.match.params.agentId))
  }

  renderAgent() {
    return (
      <>
        <Details agentId={this.props.match.params.agentId}/>
        <FollowUp />
        <Notes id={this.props.match.params.agentId}/>
      </>
    )
  }

  render() {
    
    return this.context.activeAgent !== {} ? this.renderAgent(this.context.activeAgent)
    : ( <span>Loading agent details...</span> )
  }
}

export default AgentProfile