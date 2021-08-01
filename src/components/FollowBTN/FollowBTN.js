import React, { Component } from 'react'
import RecruitContext from '../../context/RecruitContext'
import './FollowBTN.css'

class FollowBTN extends Component {
  static contextType = RecruitContext;

  isAgentFollowed() {
    return this.context.followedAgents.some(agent => parseInt(this.props.agentId) === agent.id)
  }

  handleClick = () => {
    if (this.isAgentFollowed()) {
      this.context.unfollowAgent(this.context.user.id, parseInt(this.props.agentId))
    } else {
      this.context.followAgent(this.context.user.id, parseInt(this.props.agentId))
    }
  }

  render() {
    const followStatus = this.isAgentFollowed() ? "Unfollow" : "Follow"
    const followBtnClass = followStatus === "Unfollow" ? "follow followed" : "follow notfollowed"

    return (
      <button className={followBtnClass} onClick={this.handleClick}>{followStatus}</button>
    )
  }
}

export default FollowBTN