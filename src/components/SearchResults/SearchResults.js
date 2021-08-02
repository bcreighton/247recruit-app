import React, { Component } from 'react'
import AgentCard from '../AgentCard/AgentCard'
import RecruitContext from '../../context/RecruitContext'
import './SearchResults.css'

class SearchResults extends Component {
    static contextType = RecruitContext;

    generateAgentList(agents) {
        return agents.map(agent => (
            <AgentCard
                key={agent.id}
                id={agent.id}
                name={`${agent.name}`}
                office_name={agent.brokerage}
                vol={agent.vol}
                trans={agent.trans}
                exp='1'
            />
        ))
    }
    render() {
        const { error } = this.context;

        return (
            <>
                <h2 className="sectionHead">Search Results</h2>
                <div className="error" role='alert'>
                    {error && <p>{ error.error.message }</p>}
                </div>
                <div className="searchResults">
                    {this.generateAgentList(this.context.agents)}
                </div>
            </>
        )
    }
}

export default SearchResults