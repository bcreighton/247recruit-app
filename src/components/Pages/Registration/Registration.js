import React, { Component } from 'react'
import RegistrationForm from '../../RegistrationForm/RegistrationForm';

class Registration extends Component {
    // static defaultProps = {
    //     location: {},
    //     history: {
    //         push: () => {},
    //     }
    // }

    // handleLoginSuccess = () => {
    //     const { location, history } = this.props
    //     const destination = (location.state || {}).from || '/search';
    //     history.push(destination)
    // }
    
    render() {

        return (
            <RegistrationForm name={this.props.location.state.name} email={this.props.location.state.email} />
        )
    }
}

export default Registration;