import React, { Component } from 'react';
import GetStartedBTN from '../../GetStartedBTN/GetStartedBTN';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <>
        <section className="container hero">
          <GetStartedBTN />
        </section>
        <section className="container valuePitch">
          <div className="valueContainer">
            <div className="valueIcon">

            </div>
            <div className="valueContent">
              <h2 className="valueTitle">Value 1</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quod fuga voluptas dolor omnis quasi perferendis commodi incidunt delectus, soluta molestiae sapiente voluptatum ad pariatur.
            </div>
          </div>
          <div className="valueContainer">
            <div className="valueIcon">

            </div>
            <div className="valueContent">
              <h2 className="valueTitle">Value 2</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quod fuga voluptas dolor omnis quasi perferendis commodi incidunt delectus, soluta molestiae sapiente voluptatum ad pariatur.
            </div>
          </div>
          <div className="valueContainer">
            <div className="valueIcon">

            </div>
            <div className="valueContent">
              <h2 className="valueTitle">Value 3</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quod fuga voluptas dolor omnis quasi perferendis commodi incidunt delectus, soluta molestiae sapiente voluptatum ad pariatur.
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