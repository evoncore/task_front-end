import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

  render() {
    return (
      <header className="container">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="/auth/sign-out">Sign Out</a></li>
        </ul>
      </header>
    )
  }

}

export default Header;