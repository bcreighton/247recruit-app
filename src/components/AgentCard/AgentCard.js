import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RecruitContext from '../../context/RecruitContext'
import BasicDetails from '../BasicDetails/BasicDetails'
import FollowBTN from '../FollowBTN/FollowBTN'
import './AgentCard.css'

class AgentCard extends Component {
  static contextType = RecruitContext;

  render() {
    return (
      <div className="agentCard">
        <Link 
          to={`/agent/${this.props.id}`}
        >
          <BasicDetails
            agent={this.props}
          />
        </Link>
        <FollowBTN agentId={this.props.id}/>
      </div>
    )
  }
}

export default AgentCard