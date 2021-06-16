import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Brand from '../Brand/Brand'
import './Nav.css'

class Nav extends Component {
  renderNav() {
    if(this.props.location.pathname === '/'){
      return (
        <nav>
          <Brand />
        </nav>
      )
    } else {
      return (
        <nav>
          <Brand />
          <ul>
            <li className="navItem"><Link to='/search'>Find Agents</Link></li>
            <li className="navItem"><Link to='/agents'>Followed Agents</Link></li>
          </ul>
        </nav>
      )
    }
  }

  render() {

    return (
      <>
        {this.renderNav()}
      </>
    )
  }
}

export default withRouter(Nav);