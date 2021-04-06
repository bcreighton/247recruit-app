import React, { Component } from 'react'
import LoginForm from '../../LoginForm/LoginForm'

class Login extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        }
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/search';
        history.push(destination)
    }
    
    render() {
        return (
            <LoginForm handleLoginSuccess={this.handleLoginSuccess}/>
        )
    }
}

export default Login