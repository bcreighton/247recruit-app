import React, { Component } from 'react'
import RecruitContext from '../../../context/RecruitContext'
import AgentCard from '../../AgentCard/AgentCard'


class FollowedAgents extends Component {
    static contextType = RecruitContext;

    state = {
        error: null,
    }

    generateFollowedAgentsList(followedAgents) {
        return followedAgents.map(agent => (
            <AgentCard
                key={agent.id}
                id={agent.id}
                name={agent.name}
                office_name={agent.brokerage}
                vol={agent.vol}
                trans={agent.trans}
                //exp={agent.exp}
            />
        ))
    }

    componentDidMount() {
        this.context.getFollowedAgents(this.context.user.id)
    }

    render() {
        const followedAgents = this.generateFollowedAgentsList(this.context.followedAgents)

        return (
            <section className="container">
                <h1 className="sectionTitle">Agents You're Following</h1>
                {followedAgents}
            </section>
        )
    }
}

export default FollowedAgents