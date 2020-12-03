import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BasicDetails from '../BasicDetails/BasicDetails'
import FollowBTN from '../FollowBTN/FollowBTN'
import './AgentCard.css'

class AgentCard extends Component {
  render() {
    return (
      <div className="agentCard">
        <Link to={`/agent/${this.props.id}`}>
          <BasicDetails
            agent={this.props}
          />
        </Link>
        <FollowBTN />
      </div>
    )
  }
}

export default AgentCard