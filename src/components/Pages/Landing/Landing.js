import React, { Component } from 'react'
import Footer from '../../Footer/Footer'
import RegistrationFrom from '../../RegistrationForm/RegistrationForm'
import './Landing.css'

class Landing extends Component {
  render() {
    return (
      <>
        <section className="container hero">
          <RegistrationFrom />
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
          <RegistrationFrom />
        </section>
      </>
    )
  }
}

export default Landing