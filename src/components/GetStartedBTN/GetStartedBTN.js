import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './GetStartedBTN.css';

class GetStartedBTN extends Component {
    render() {
        return(
            <Link to='/search'>
                <button className='getStarted'>Get Started</button>
            </Link>
        )
    }
}

export default GetStartedBTN;