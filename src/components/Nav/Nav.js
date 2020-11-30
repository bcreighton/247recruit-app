import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="navItem"><Link to='/signin'>Sign In</Link></li>
          <li className="navItem"><Link to='/about'>About Us</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav