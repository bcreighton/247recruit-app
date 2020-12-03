import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Brand from '../Brand/Brand'

class Nav extends Component {
  render() {
    return (
      <nav>
        <Brand />
        <ul>
          <li className="navItem"><Link to='/signin'>Sign In</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav