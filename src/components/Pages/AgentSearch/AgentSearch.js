import React, { Component } from 'react'
import SearchForm from '../../SearchForm/SearchForm'
import SearchResults from '../../SearchResults/SearchResults'
import SearchSort from '../../SearchSort/SearchSort'
import './AgentSearch.css';

class AgentSearch extends Component {
    render() {
        return (
            <div id='agentSearch'>
                <section className='container'>
                    <h1>Find Agents</h1>
                    <p>Select how you would like your search to be sorted and find agents by name or by the office they're with.</p>
                    <h3>Here's a tip!!</h3>
                    <p>Don't focus soley on production or experience; new and "unexpereinced" agents are necessary for the longterm growth of your brokerage!!</p>
                    <hr />
                    <SearchSort />
                    <SearchForm />
                    <hr />
                </section>
                <section className="container">
                    <SearchResults />
                </section>
            </div>
        )
    }
}

export default AgentSearch