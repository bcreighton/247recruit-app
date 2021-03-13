import React, { Component } from 'react'
import RecruitContext from '../../context/RecruitContext'
import './FollowBTN.css'

class FollowBTN extends Component {
  static contextType = RecruitContext;

  isAgentFollowed = () => {
    
  }

  handleClick = () => {
    this.context.followAgent(this.context.user.id, this.props.agentId)
  }

  render() {
    return (
      <button className="follow" onClick={this.handleClick}>Follow</button>
    )
  }
}

export default FollowBTN