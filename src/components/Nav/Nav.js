import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="navItem"><a href='#'>Sign In</a></li>
          <li className="navItem"><a href='#'>About Us</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav