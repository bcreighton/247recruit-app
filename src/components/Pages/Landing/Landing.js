import React, { Component } from 'react';
import GetStartedBTN from '../../GetStartedBTN/GetStartedBTN';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <>
        <section className="container hero">
          <h2 className='heroTitle'>Grow Your Brokerage Today!!</h2>
          <h3 className='heroValue'>Find, follow and stay in touch with the agents in your marketplace that you value the most and can provide the most value to!</h3>
          <GetStartedBTN />
        </section>
        <section className="container valuePitch">
          <div className="valueContainer">
            <div className="valueIcon">

            </div>
            <div className="valueContent">
              <h2 className="valueTitle">Value 1</h2>
              Looking for the top agents in your market? You're in the right place to grow your brokerage!
            </div>
          </div>
          <div className="valueContainer">
            <div className="valueIcon">

            </div>
            <div className="valueContent">
              <h2 className="valueTitle">Value 2</h2>
              We connect the MLS data with your local licensing commssion to give you more precise and up to date data!
            </div>
          </div>
          <div className="valueContainer">
            <div className="valueIcon">

            </div>
            <div className="valueContent">
              <h2 className="valueTitle">Value 3</h2>
              Follow and stay in touch with the agents you feel you can help the most!
            </div>
          </div>
        </section>

        <section className="container">
          <GetStartedBTN />
        </section>
      </>
    )
  }
}

export default Landing