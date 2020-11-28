import React, { Component } from 'react'
import FollowBTN from '../FollowBTN/FollowBTN'

class Details extends Component {
  render() {

    return (
      <section className="content">
        <h1 className="agentName">{this.props.agent.name}</h1>
        <FollowBTN />
        <hr />
        <div className="details">
          <ul>
            <li className="detailItem">
              {this.props.agent.phone}
            </li>
            <li className="detailItem">
              {this.props.agent.email}
            </li>
            <li className="detailItem">
              <span className='detailTitle'>Volume: </span>
              ${this.props.agent.vol}
            </li>
            <li className="detailItem">
              <span className='detailTitle'>Transactions: </span>
              {this.props.agent.trans}
            </li>
            <li className="detailItem">
              <span className='detailTitle'>Experience: </span>
              {this.props.agent.exp} years
            </li>
            <li className="detailItem">
              {this.props.agent.office_name}
            </li>
            <li className="detailItem">
              {`${this.props.agent.office_steet}, ${this.props.agent.office_city}, ${this.props.agent.office_state} ${this.props.agent.office_zip}`}
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Details