import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import RecruitContext from '../../../context/RecruitContext'
import AgentCard from '../../AgentCard/AgentCard'
import './FollowedAgents.css'


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
            />
        ))
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.context.getFollowedAgents(this.context.user.id)
    }

    render() {
        const followedAgents = this.generateFollowedAgentsList(this.context.followedAgents)

        return (
            <div id='followedAgents'>
                <section className="container">
                    <h1 className="sectionTitle">Agents You're Following</h1>
                    {followedAgents.length > 0 ? followedAgents : <p className='notification'>You are not following any agents; please visit <Link to='/search'>"Find Agents"</Link> to search for agents to follow. </p>}
                </section>
            </div>
        )
    }
}

export default FollowedAgents