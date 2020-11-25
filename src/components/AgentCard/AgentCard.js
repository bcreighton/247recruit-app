import React, { Component } from 'react'
import BasicDetails from '../BasicDetails/BasicDetails'
import FollowBTN from '../FollowBTN/FollowBTN'

class AgentCard extends Component {
  render() {
    return (
      <div className="agentCard">
        <BasicDetails
          name={this.props.name}
          office={this.props.office}
          vol={this.props.vol}
          trans={this.props.trans}
          exp={this.props.exp}
        />
        <FollowBTN />
      </div>
    )
  }
}

export default AgentCard