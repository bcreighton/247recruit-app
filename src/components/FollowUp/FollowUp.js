import React, { Component } from 'react'
import './FollowUp.css'

class FollowUp extends Component {
  render() {
    return (
      <section className="container followUp">
        <h2 className="sectionHead">Follow Up Tips</h2>
        <ol className="followUpList">
          <li className="followupListItem">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem inventore temporibus perferendis!
          </li>
          <li className="followupListItem">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem inventore temporibus perferendis!
          </li>
          <li className="followupListItem">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem inventore temporibus perferendis!
          </li>
          <li className="followupListItem">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem inventore temporibus perferendis!
          </li>
        </ol>
      </section>
    )
  }
}

export default FollowUp