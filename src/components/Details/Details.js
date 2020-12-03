import React, { Component } from 'react'
import FollowBTN from '../FollowBTN/FollowBTN'

class Details extends Component {
  render() {
    
    return (
      <section className="container agentDetail">
        <h1 className="agentName">{`${this.props.agent.first_name} ${this.props.agent.last_name}`}</h1>
        <FollowBTN />
        <div className="details">
          <ul>
            <li className="detailItem phone">
              {this.props.agent.contact.phone}
            </li>
            <li className="detailItem email">
              {this.props.agent.contact.email}
            </li>
            <li className="detailItem vol">
              <span className='detailTitle'>Volume: </span>
              {this.props.agent.vol}
            </li>
            <li className="detailItem trans">
              <span className='detailTitle'>Transactions: </span>
              {this.props.agent.trans}
            </li>
            <li className="detailItem exp">
              <span className='detailTitle'>Experience: </span>
              {this.props.agent.exp} years
            </li>
            <li className="detailItem office">
              <span className='officeName'>{this.props.agent.office.name}</span>
              <br />
              {`${this.props.agent.office.street}, ${this.props.agent.office.city}, ${this.props.agent.office.state} ${this.props.agent.office.zip}`}
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Details