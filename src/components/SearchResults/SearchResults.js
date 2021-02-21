import React, { Component } from 'react'
import AgentCard from '../AgentCard/AgentCard'
import RecruitContext from '../../context/RecruitContext'

class SearchResults extends Component {
    static contextType = RecruitContext;

    generateAgentList(agents) {
        return agents.map(agent => (
            <AgentCard
                key={agent.id}
                id={agent.id}
                name={`${agent.name}`}
                office_name={agent.brokerage.brokerage_name}
                vol={agent.tot_vol}
                trans={agent.tot_units}
                exp='1'
            />
        ))
    }
    render() {
        return (
            <>
                <h2 className="sectionHead">Search Results</h2>
                <div className="searchResults">
                    {this.generateAgentList(this.context.agents)}
                </div>
            </>
        )
    }
}

export default SearchResults