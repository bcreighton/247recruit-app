import React, { Component } from 'react'
import RecruitContext from '../../context/RecruitContext';
import FollowBTN from '../FollowBTN/FollowBTN'

class Details extends Component {
  static contextType = RecruitContext;

  render() {
    return (
      <section className="container agentDetail">
        <h1 className="agentName">{this.props.agent.name}</h1>
        <FollowBTN />
        <div className="details">
          <ul>
            <li className="detailItem phone">
              {this.props.agent.phone}
            </li>
            <li className="detailItem email">
              {this.props.agent.email}
            </li>
            <li className="detailItem vol">
              <span className='detailTitle'>Volume: </span>
              {this.props.agent.vol}
            </li>
            <li className="detailItem trans">
              <span className='detailTitle'>Transactions: </span>
              {this.props.agent.trans}
            </li>
            {/* <li className="detailItem exp">
              <span className='detailTitle'>Experience: </span>
              {this.props.agent.exp} years
            </li> */}
            <li className="detailItem office">
              <span className='officeName'>{this.props.agent.brokerage_name}</span>
              <br />
              {`${this.props.agent.brokerage_street}, ${this.props.agent.brokerage_city}, ${this.props.agent.brokerage_state}`}
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Details