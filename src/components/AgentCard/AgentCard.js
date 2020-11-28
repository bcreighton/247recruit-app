import React, { Component } from 'react'
import BasicDetails from '../BasicDetails/BasicDetails'
import FollowBTN from '../FollowBTN/FollowBTN'

class AgentCard extends Component {
  render() {
    return (
      <div className="agentCard">
        <BasicDetails
          agent={this.props}
        />
        <FollowBTN />
      </div>
    )
  }
}

export default AgentCard