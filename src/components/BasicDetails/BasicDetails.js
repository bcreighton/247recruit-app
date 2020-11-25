import React, { Component } from 'react'

class BasicDetails extends Component {
  render() {
    return (
      <div className="basicDetails">
        <ul>
          <li className="detailItem agentCardName">
            {this.props.name}
          </li>
          <li className="detailItem">
            <span className='detailTitle'>Office: </span>
            {this.props.office}
          </li>
          <li className="detailItem">
            <span className='detailTitle'>Volume: </span>
            ${this.props.vol}
          </li>
          <li className="detailItem">
            <span className='detailTitle'>Transactions: </span>
            {this.props.trans}
          </li>
          <li className="detailItem">
            <span className='detailTitle'>Experience: </span>
            {this.props.exp} years
          </li>
        </ul>
      </div>
    )
  }
}

export default BasicDetails