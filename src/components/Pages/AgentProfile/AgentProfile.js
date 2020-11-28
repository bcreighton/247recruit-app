import React, { Component } from 'react'
import Details from '../../Details/Details'
import FollowUp from '../../FollowUp/FollowUp'
import Notes from '../../Notes/Notes'

class AgentProfile extends Component {
  render() {
    return (
      <>
        <Details
          agent={this.props.agent}
        />
        <FollowUp />
        <Notes />
      </>
    )
  }
}

export default AgentProfile