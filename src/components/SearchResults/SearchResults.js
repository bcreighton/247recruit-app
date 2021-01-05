import React, { Component } from 'react'
import AgentCard from '../AgentCard/AgentCard'
import Agents from '../../mockData/agentsData'

class SearchResults extends Component {
    generateSearchResults(agents) {
        return agents.map(agent => (
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
        return (
            <>
                <h2 className="sectionHead">Search Results</h2>
                <div className="searchResults">
                    {this.generateSearchResults(Agents)}
                </div>
            </>
        )
    }
}

export default SearchResults