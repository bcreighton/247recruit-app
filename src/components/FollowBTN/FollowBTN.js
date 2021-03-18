import React, { Component } from 'react'
import RecruitContext from '../../context/RecruitContext'
import './FollowBTN.css'

class FollowBTN extends Component {
  static contextType = RecruitContext;

  state = {
    followed: false,
  }

  followToggle(id) {
    const isFollowed = this.context.followedAgents.find(agent => 
      agent.id === id
    );

    (!isFollowed)
      ? this.setState({ followed: false })
      : this.setState({ followed: true })
  }

  addFollowedAgent() {
    this.context.followAgent(this.context.user.id, parseInt(this.props.agentId));
    this.followToggle(parseInt(this.props.agentId));
  }

  handleClick = () => {
    (!this.state.followed)
      ? this.addFollowedAgent()
      : this.followToggle(parseInt(this.props.agentId))
  }

  componentDidMount() {
    debugger;
    this.followToggle(parseInt(this.props.agentId))
  }

  render() {
    const followStatus = (!this.state.followed) ? `Follow` : `Unfollow`;

    return (
      <button className="follow" onClick={this.handleClick}>{followStatus}</button>
    )
  }
}

export default FollowBTN