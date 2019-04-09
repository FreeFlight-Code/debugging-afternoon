import React from 'react';
import './NavBar.css';
import Logo from './dev-mountain-logo.png'

function NavBar (props) {
  return (
    <div>
      <div className="navbar-container">
        <div className="logo-container">
          <img className="logo-image" src={Logo} alt="" />
        </div>

        <div className="navbar-links-container">
          <ul className="navbar-links">
            <li onClick={() => props.navigate('store')}>Store</li>
            <li onClick={() => props.navigate('cart')}>Shopping Cart</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default NavBar;