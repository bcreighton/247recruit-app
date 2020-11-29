import React, { Component } from 'react'

class BasicDetails extends Component {
  render() {
    return (
      <div className="basicDetails">
        <ul>
          <li className="detailItem agentCardName">
            {this.props.agent.name}
          </li>
          <li className="detailItem">
            <span className='detailTitle'>Office: </span>
            {this.props.agent.office_name}
          </li>
          <li className="detailItem">
            <span className='detailTitle'>Volume: </span>
            {this.props.agent.vol}
          </li>
          <li className="detailItem">
            <span className='detailTitle'>Transactions: </span>
            {this.props.agent.trans}
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