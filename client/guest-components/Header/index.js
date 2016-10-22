import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

  render() {
    return (
      <header className="container">
        <ul>
          <li><Link to="/sign-in">Sign In</Link></li>
          <li><Link to="/sign-up">Sign Up</Link></li>
        </ul>
      </header>
    )
  }

}

export default Header;