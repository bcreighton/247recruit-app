import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import FollowBTN from '../FollowBTN/FollowBTN'

class BasicDetails extends Component {
  render() {
    return (
      <div className="basicDetails">
        <ul>
          <li className="detailItem agentCardName">
            {this.props.agent.name}
          </li>
          <li className="detailItem agentOffice">
            {this.props.agent.office_name}
          </li>
          <li className="detailItem">
            <span className='detailTitle'>Volume: </span>
            <NumberFormat value={this.props.agent.vol} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          </li>
          <li className="detailItem">
            <span className='detailTitle'>Transactions: </span>
            <NumberFormat value={this.props.agent.trans} npm displayType={'text'} thousandSeparator={true} />
          </li>
          <li className="detailItem">
            <span className='detailTitle'>Experience: </span>
            {this.props.agent.exp} years
          </li>
        </ul>
      </div>
    )
  }
}

export default BasicDetails