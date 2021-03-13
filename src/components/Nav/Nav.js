import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Brand from '../Brand/Brand'
import './Nav.css'

class Nav extends Component {
  render() {
    return (
      <nav>
        <Brand />
        <ul>
          <li className="navItem"><Link to='/signin'>Sign In</Link></li>
        </ul>
        <ul>
          <li className="navItem"><Link to='/agents'>Followed Agents</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav