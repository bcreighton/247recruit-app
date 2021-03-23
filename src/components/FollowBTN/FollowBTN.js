import React, { Component } from 'react'
import RecruitContext from '../../context/RecruitContext'
import './FollowBTN.css'

class FollowBTN extends Component {
  static contextType = RecruitContext;

  state = {
    followed: false,
  }

  isAgentFollowed(id) {
    const isFollowed = this.context.followToggle(id);

    (!isFollowed) 
      ? this.setState({ followed: false })
      : this.setState({ followed: true })
  }

  handleClick = () => {
    if (this.state.followed === true) {
      this.context.unfollowAgent(this.context.user.id, parseInt(this.props.agentId))
      this.setState({followed: false})
    } else {
      this.context.followAgent(this.context.user.id, parseInt(this.props.agentId))
      this.setState({followed: true})
    }
  }

  componentDidMount() {
    this.isAgentFollowed(parseInt(this.props.agentId))
  }

  render() {
    const followStatus = (this.state.followed === true) ? "Unfollow" : "Follow"

    return (
      <button className="follow" onClick={this.handleClick}>{followStatus}</button>
    )
  }
}

export default FollowBTN