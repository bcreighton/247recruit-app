import React, { Component } from 'react'
import RecruitContext from '../../context/RecruitContext';
import FollowBTN from '../FollowBTN/FollowBTN'

class Details extends Component {
  static contextType = RecruitContext;

  render() {
    
    return (
      <section className="container agentDetail">
        <h1 className="agentName">{this.props.agent[0].name}</h1>
        <FollowBTN />
        <div className="details">
          <ul>
            <li className="detailItem phone">
              {this.props.agent[0].phone}
            </li>
            <li className="detailItem email">
              {this.props.agent[0].email}
            </li>
            <li className="detailItem vol">
              <span className='detailTitle'>Volume: </span>
              {this.props.agent[0].vol}
            </li>
            <li className="detailItem trans">
              <span className='detailTitle'>Transactions: </span>
              {this.props.agent[0].trans}
            </li>
            <li className="detailItem exp">
              <span className='detailTitle'>Experience: </span>
              {this.props.agent[0].exp} years
            </li>
            <li className="detailItem office">
              <span className='officeName'>{this.props.agent[0].office.name}</span>
              <br />
              {`${this.props.agent[0].office.street}, ${this.props.agent.office.city}, ${this.props.agent.office.state} ${this.props.agent.office.zip}`}
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Details