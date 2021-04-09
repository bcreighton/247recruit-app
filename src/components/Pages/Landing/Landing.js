import React, { Component } from 'react'
import RegistrationFrom from '../../GetStartedForm/GetStartedForm'
import './Landing.css'

class Landing extends Component {
  render() {
    return (
      <>
        <section className="container hero">
          <RegistrationFrom 
            id='getStartedForm1'
            nameId='getStartedForm1-name'
            emailId='getStartedForm1-email'
            passwordId='getStartedForm1-password'
          />
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
          <RegistrationFrom 
            id='getStartedForm2'
            nameId='getStartedForm2-name'
            emailId='getStartedForm2-email'
            passwordId='getStartedForm2-password'
          />
        </section>
      </>
    )
  }
}

export default Landing