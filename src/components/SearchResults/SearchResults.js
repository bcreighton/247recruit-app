import React, { Component } from 'react'
import AgentCard from '../AgentCard/AgentCard'
import Agents from '../../mockData/agentsData'
import { Link } from 'react-router-dom'

class SearchResults extends Component {
    generateSearchResults(agents) {
        return agents.map(agent => (
            <Link to={`/agent/${agent.id}`} key={agent.id}>
                <AgentCard
                    id={agent.id}
                    name={`${agent.first_name} ${agent.last_name}`}
                    office_name={agent.office.name}
                    vol={agent.vol}
                    trans={agent.trans}
                    exp={agent.exp}
                />
            </Link>
        ))
    }
    render() {
        return (
            <>
                {this.generateSearchResults(Agents)}
            </>
        )
    }
}

export default SearchResults