import React, { Component } from 'react'
import AgentCard from '../../AgentCard/AgentCard'

class FollowedAgents extends Component {
    render() {
        return (
            <>
                <section className="container">
                    <AgentCard
                        name='Quincy Avery'
                        office='C21'
                        vol='15,520,000'
                        trans='10'
                        exp='3'
                    />

                    <AgentCard
                        name='Jon Johnson'
                        office='JJ Realty'
                        vol='2,500,000'
                        trans='6'
                        exp='3'
                    />

                    <AgentCard
                        name='Jessica Wills'
                        office='JLA Realty'
                        vol='37,000,000'
                        trans='12'
                        exp='6'
                    />

                    <AgentCard
                        name='Mike Smith'
                        office='eXp'
                        vol='0'
                        trans='0'
                        exp='1'
                    />

                    <AgentCard
                        name='Sam Haram'
                        office='Coldwell Banker'
                        vol='5,550,000'
                        trans='5'
                        exp='7'
                    />

                    <AgentCard
                        name='Ige Willson'
                        office='Sothebys'
                        vol='35,450,000'
                        trans='50'
                        exp='16'
                    />

                    <AgentCard
                        name='Bob Alam'
                        office='John Greene Real Estate'
                        vol='3,700,000'
                        trans='5'
                        exp='8'
                    />

                    <AgentCard
                        name='Robbie Kelly'
                        office='eXp'
                        vol='7,600,225'
                        trans='19'
                        exp='9'
                    />
                </section>
            </>
        )
    }
}

export default FollowedAgents