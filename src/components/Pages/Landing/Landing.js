import React, { Component } from 'react'
import Footer from '../../Footer/Footer'
import RegistrationFrom from '../../RegistrationForm/RegistrationForm'

class Landing extends Component {
  render() {
    return (
      <>
        <section className="container hero">
          <RegistrationFrom />
        </section>
        <section className="container">
          <div className="valueContainer">
            <div className="valueIcon">

            </div>
            <div className="valueContent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quod fuga voluptas dolor omnis quasi perferendis commodi incidunt delectus, soluta molestiae sapiente voluptatum ad pariatur.
            </div>
          </div>
          <div className="valueContainer">
            <div className="valueIcon">

            </div>
            <div className="valueContent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quod fuga voluptas dolor omnis quasi perferendis commodi incidunt delectus, soluta molestiae sapiente voluptatum ad pariatur.
            </div>
          </div>
          <div className="valueContainer">
            <div className="valueIcon">

            </div>
            <div className="valueContent">
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