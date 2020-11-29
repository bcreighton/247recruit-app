import React, { Component } from 'react'
import agents from '../../../mockData/agentsData'
import users from '../../../mockData/userData'
import AgentCard from '../../AgentCard/AgentCard'


class FollowedAgents extends Component {

    getUser() {
        debugger
        return users.find(user => user.id === 672) || {}
    }

    getFollowedAgents(followedAgents) {
        debugger
        return followedAgents.map(followedAgent => {
            return agents.filter((agent, i) => {
                return agent.id === followedAgents[i]
            })
        })
    }

    generateFollowedAgentsList(agentIds) {
        debugger
        return agentIds.map(agent => (
            <AgentCard
                key={agent.id}
                id={agent.id}
                name={`${agent.first_name} ${agent.last_name}`}
                office_name={agent.office.name}
                vol={agent.vol}
                trans={agent.trans}
                exp={agent.exp}
            />
        ))
    }

    render() {
        const selectedUser = this.getUser()
        debugger
        const followedAgentIds = this.getFollowedAgents(selectedUser.followed_agents)

        return (
            <section className="container">
                {this.generateFollowedAgentsList(followedAgentIds)}
            </section>
        )
    }
}

export default FollowedAgents