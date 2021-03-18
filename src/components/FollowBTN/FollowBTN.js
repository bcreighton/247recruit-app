import React, { Component } from 'react'
import RecruitContext from '../../context/RecruitContext'
import './FollowBTN.css'

class FollowBTN extends Component {
  static contextType = RecruitContext;

  state = {
    followed: false,
  }

  followToggle() {
    const followed = this.context.followedAgents.find(agent => agent.id === this.props.agentId)
    debugger;

    (!followed)
      ? this.setState({ followed: false })
      : this.setState({ followed: true })
  }

  handleClick = () => {
    this.context.followAgent(this.context.user.id, this.props.agentId);
    this.followToggle();
  }

  render() {
    const followStatus = (!this.state.followed) ? `Follow` : `Unfollow`;

    return (
      <button className="follow" onClick={this.handleClick}>{followStatus}</button>
    )
  }
}

export default FollowBTN