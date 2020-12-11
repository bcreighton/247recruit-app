import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import agents from '../../../mockData/agentsData'
import users from '../../../mockData/userData'
import AgentCard from '../../AgentCard/AgentCard'


class FollowedAgents extends Component {

    getUser() {

        return users.find(user => user.id === 672) || {}
    }

    getFollowedAgents(followedAgents, agents) {


        return followedAgents.map(followedAgent => {
            return agents.filter(agent => {
                return agent.id === followedAgent
            })
        })
    }

    generateFollowedAgentsList(agentArr) {

        const matchedAgents = []

        agentArr.map(agents => (
            agents.map(agent => (
                matchedAgents.push(agent)
            ))
        )
        )


        return matchedAgents.map(agent => (
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

        const followedAgentIds = this.getFollowedAgents(selectedUser.followed_agents, agents)

        return (
            <section className="container">
                <h1 className="sectionTitle">Agents You're Following</h1>
                {this.generateFollowedAgentsList(followedAgentIds)}
            </section>
        )
    }
}

export default FollowedAgents