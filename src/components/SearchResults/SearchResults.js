import React, { Component } from 'react'
import AgentCard from '../AgentCard/AgentCard'

class SearchResults extends Component {
    render() {
        return (
            <>
                <AgentCard
                    agent={
                        {
                            name: 'Susie Q',
                            office: 'Keller Williams',
                            vol: '10,000,000',
                            trans: '31',
                            exp: '22',
                        }
                    }

                />
                <AgentCard
                    agent={
                        {
                            name: 'John Miller',
                            office: 'Compass',
                            vol: '2,500,000',
                            trans: '4',
                            exp: '2',
                        }
                    }

                />
                <AgentCard
                    agent={
                        {
                            name: 'Jane Ore',
                            office: 'JLA Realty',
                            vol: '375,000',
                            trans: '1',
                            exp: '6',
                        }
                    }

                />
                <AgentCard
                    agent={
                        {
                            name: 'Mike Smith',
                            office: 'eXp',
                            vol: '0',
                            trans: '0',
                            exp: '1',
                        }
                    }

                />
            </>
        )
    }
}

export default SearchResults