import React, { Component } from 'react'
import Details from '../../Details/Details'
import FollowUp from '../../FollowUp/FollowUp'
import Notes from '../../Notes/Notes'
import './AgentProfile.css'
import RecruitContext from '../../../context/RecruitContext'
import RecruitingApiService from '../../../services/recruiting-api-service'

class AgentProfile extends Component {
  static contextType = RecruitContext;
  static defaultProps = { match: {params:{ agentId: ''}}}

  state = {
    activeAgent: [],
    error: null
  }

  componentDidMount() {
    RecruitingApiService.getAgent(parseInt(this.props.match.params.agentId))
      .then(res => {
        debugger;
        return this.setState({
          activeAgent: [res]
      })})
      .catch(error => {
        this.setState({ error })
        console.log(this.state.error.message)
      })
  }

  renderAgent(agent) {
    return (
      <>
        <Details agent={agent}
        />
        <FollowUp />
        <Notes agent={agent} />
      </>
    )
  }

  render() {
    const agent = this.state.activeAgent;
    

    return agent.length ? this.renderAgent(agent[0])
    : ( <span>Loading agent details...</span> )
  }
}

export default AgentProfile