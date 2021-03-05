import React, { Component } from 'react'
import RecruitContext from '../../context/RecruitContext';
import FollowBTN from '../FollowBTN/FollowBTN'

class Details extends Component {
  static contextType = RecruitContext;

  render() {
    return (
      <section className="container agentDetail">
        <h1 className="agentName">{this.context.activeAgent.name}</h1>
        <FollowBTN />
        <div className="details">
          <ul>
            <li className="detailItem phone">
              {this.context.activeAgent.phone}
            </li>
            <li className="detailItem email">
              {this.context.activeAgent.email}
            </li>
            <li className="detailItem vol">
              <span className='detailTitle'>Volume: </span>
              {this.context.activeAgent.vol}
            </li>
            <li className="detailItem trans">
              <span className='detailTitle'>Transactions: </span>
              {this.context.activeAgent.trans}
            </li>
            {/* <li className="detailItem exp">
              <span className='detailTitle'>Experience: </span>
              {this.context.activeAgent.exp} years
            </li> */}
            <li className="detailItem office">
              <span className='officeName'>{this.context.activeAgent.brokerage_name}</span>
              <br />
              {`${this.context.activeAgent.brokerage_street}, ${this.context.activeAgent.brokerage_city}, ${this.context.activeAgent.brokerage_state}`}
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Details