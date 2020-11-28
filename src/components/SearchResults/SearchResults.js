import React, { Component } from 'react'
import AgentCard from '../AgentCard/AgentCard'
import Agents from '../../mockData/agentsData'

class SearchResults extends Component {
    debugger
    generateSearchResults(agents) {
        debugger
        return agents.map(agent => (
            <AgentCard
                key={agent.id}
                id={agent.id}
                name={`${agent.first_name} ${agent.last_name}`}
                office_name={agent.office_name}
                vol={agent.vol}
                trans={agent.trans}
                exp={agent.exp}
            />
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