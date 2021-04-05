import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Brand extends Component {
  render() {
    return (
      <Link to='/search'>
        <div className='brand'>
          <h1>24/7 REcruit</h1>
          <h5>The recruiting platform of your dreams...</h5>
        </div>
      </Link>
    )
  }
}

export default Brand