import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Brand from '../Brand/Brand'
import TokenService from '../../services/token-service';
import './Nav.css'

class Nav extends Component {

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  }

  renderSigninLink() {
    return (
      <nav className='nav_not-logged-in'>
        <Brand />
        <ul>
          <li className="navItem"><Link to='/signin'>Sign In</Link></li>
        </ul>
      </nav>
    )
  }
  
  renderLogoutLink() {
    return (
      <nav className='nav_logged-in'>
        <Brand />
        <ul>
          <li className="navItem">
            <Link to='/agents'>Followed Agents</Link>
          </li>
          <li className="navItem">
            <Link
              onClick={this.handleLogoutClick}
              to='/'>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
  
  render() {
    return (
      <>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderSigninLink()}
      </>
    )
  }
}

export default Nav