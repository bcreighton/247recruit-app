import React, { Component } from 'react';
import GetStartedBTN from '../../GetStartedBTN/GetStartedBTN';
import './Landing.css';
import searchIcon from '../../../images/search-icon.jpg';
import dataIcon from '../../../images/data-icon.jpg';
import followUpIcon from '../../../images/follow-up-icon.jpg'

class Landing extends Component {
  render() {
    return (
      <>
        <section className="container hero">
          <h2 className='heroTitle'>Grow Your Brokerage Today!!</h2>
          <h3 className='heroValue'>Find, follow and stay in touch with the agents in your marketplace that you value the most and can provide the most value to!</h3>
          <GetStartedBTN />
          <div className="instructions">
            <p className="disclaimer">
              <span>Disclaimer:</span> This is a demo/pilot application and does not use real world real estate agent data, MLS data, and/or state licensing data. Transactions and Volume numbers will not always equate to real world numbers.
            </p>
            <h2>How To Use 24/7 REcruit...</h2>
              <ol>
                <li><span>1. </span>Click "Get Started" (no registration or login required)</li>
                <li><span>2. </span>Search for an agent or a wildcard term ie: Veronica, Duane, R, El</li>
                <li><span>3. </span>Select the agent you want see more details about.</li>
                <li><span>4. </span>Create a note using the form</li>
                <li><span>5. </span>Explore the rest of the app...</li>
              </ol>
          </div>
        </section>
        <section className="container valuePitch">
          <div className="valueContainer">
            <div className="valueIcon">

            </div>
            <div className="valueContent">
              <div className="valueImageContainer">
                <img className='valueImage' src={searchIcon} alt="search-icon"/>
              </div>
              <h2 className="valueTitle">Search!</h2>
              <p>Looking for the top agents in your market? You're in the right place to grow your brokerage!</p>
            </div>
          </div>
          <div className="valueContainer">
            <div className="valueIcon">

            </div>
            <div className="valueContent">
              <div className="valueImageContainer">
              <img className='valueImage' src={dataIcon} alt="data-icon"/>
              </div>
              <h2 className="valueTitle">Data!</h2>
              <p>We connect the MLS data with your local licensing commssion to give you more precise and up to date data!</p>
            </div>
          </div>
          <div className="valueContainer">
            <div className="valueIcon">

            </div>
            <div className="valueContent">
              <div className="valueImageContainer">
                <img className='valueImage' src={followUpIcon} alt="follow-up-icon"/>
              </div>
              <h2 className="valueTitle">Follow Up!</h2>
              <p>Follow and stay in touch with the agents you feel you can help the most!</p>
            </div>
          </div>
        </section>

        <section className="container cta">
          <GetStartedBTN />
        </section>
      </>
    )
  }
}

export default Landing