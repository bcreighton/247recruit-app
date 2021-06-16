import React, { Component } from 'react'
import RecruitContext from '../../context/RecruitContext';
import './FollowUp.css'

class FollowUp extends Component {
  static contextType = RecruitContext;

  generateFollowUpList = (agent) => {
    
    if(parseFloat(agent.vol) > 1500000 && parseFloat(agent.vol) < 3000000) { // low producer or newbie
      return (
        <ol className="followUpList">
          <li className="followupListItem">
            Discover their biggest challenge in the business that's preventing more transactions.
          </li>
          <li className="followupListItem">
            Focus on development and career progression.
          </li>
          <li className="followupListItem">
            Uncover what resources are valuable to them and whether their current brokerage is providing that service/support.
          </li>
          <li className="followupListItem">
              Ensure they're treating the business as a business and not as a hobby. You can fall face first into this range of production!
          </li>
        </ol>
      )
    }

    if(parseFloat(agent.vol) > 3000000 && parseFloat(agent.vol) < 5000000) { // mid-tier producer
      return (
        <ol className="followUpList">
          <li className="followupListItem">
            Discover their biggest challenge in the business that's preventing more transactions.
          </li>
          <li className="followupListItem">
            Uncover where they want to go and whether they believe their current environment will help them get there.
          </li>
          <li className="followupListItem">
            Be their broker before your their broker, offer congratulations, support and/or invite them to a training to help overcome their biggest challenge (No strings attached!!!)
          </li>
          <li className="followupListItem">
              Agents in this range are starting to gain clout but still have gaps within their business as it pertains to systems and processes.
          </li>
        </ol>
      )
    }

    if(parseFloat(agent.vol) > 5000000 && parseFloat(agent.vol) < 8000000) { // Low-end Top Producer
      return (
        <ol className="followUpList">
          <li className="followupListItem">
            Get the agent talking about their business, how they feel about it, and where they want to go.
          </li>
          <li className="followupListItem">
            Development for this agent will look more like advanced business processes; typically in the form of systems.
          </li>
          <li className="followupListItem">
            It's essential to understand the gaps in this agent's business by reading between the lines. Typically this agent will not share pitfalls and will be looking for what you can do for them. Remember this is a partnership...
          </li>
          <li className="followupListItem">
              If this agent doesn't have an assist and wants to grow it's time to have that conversation!
          </li>
        </ol>
      )
    }

    if(parseFloat(agent.vol) > 8000000 && parseFloat(agent.vol) < 15000000) { // Top producer
      return (
        <ol className="followUpList">
          <li className="followupListItem">
            This type of agent is looking for a broker(partner) that will help them go to the next level with minimal effort.
          </li>
          <li className="followupListItem">
            Focus on development and career progression.
          </li>
          <li className="followupListItem">
            Uncover what resources are valuable to them and whether their current brokerage is providing that service/support.
          </li>
          <li className="followupListItem">
              Ensure they're treating the business as a business and not as a hobby. You can fall face first into this range of production!
          </li>
        </ol>
      )
    }

    if(parseFloat(agent.vol) > 15000000) { // Mega producer
      return (
        <ol className="followUpList">
          <li className="followupListItem">
            This agent wants and needs to be catered to... Don't mistake this for "give them what they want"!
          </li>
          <li className="followupListItem">
            Discover what they truly want out of their career moving forward; growth, sustainability, retirement, leverage, etc.
          </li>
          <li className="followupListItem">
            This agent will take some time to recruit; years to be exact!
          </li>
        </ol>
      )
    }
  }

  render() {
    const followUp = this.generateFollowUpList(this.context.activeAgent);

    return (
      <section className="container followUp">
        <h2 className="sectionHead">Follow Up Tips</h2>
        {followUp}
      </section>
    )
  }
}

export default FollowUp