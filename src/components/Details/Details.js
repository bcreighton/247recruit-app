import React, { Component } from 'react'
import RecruitContext from '../../context/RecruitContext';
import NumberFormat from 'react-number-format';
import FollowBTN from '../FollowBTN/FollowBTN'

class Details extends Component {
  static contextType = RecruitContext;

  render() {
    return (
      <section className="container agentDetail">
        <h1 className="agentName">{this.context.activeAgent.name}</h1>
        <FollowBTN agentId={this.props.agentId}/>
        <div className="details">
          <ul>
            <li className="detailItem phone">
              {this.context.activeAgent.phone}
            </li>
            <li className="detailItem email">
              {this.context.activeAgent.email}
            </li>
            <li className="detailItem officeName">
              <span className='officeName'>{this.context.activeAgent.brokerage}</span>
            </li>
            <li className='detailItem officeAddress'>
              {`${this.context.activeAgent.brokerage_street}, ${this.context.activeAgent.brokerage_city}, ${this.context.activeAgent.brokerage_state}`}
            </li>
            <li className="detailItem vol">
              <span className='detailTitle'>Volume: </span>
              <NumberFormat value={this.context.activeAgent.vol} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </li>
            <li className="detailItem trans">
              <span className='detailTitle'>Transactions: </span>
              <NumberFormat value={this.context.activeAgent.trans} displayType={'text'} thousandSeparator={true} />
            </li>
            {/* <li className="detailItem exp">
              <span className='detailTitle'>Experience: </span>
              {this.context.activeAgent.exp} years
            </li> */}
          </ul>
        </div>
      </section>
    )
  }
}

export default Details