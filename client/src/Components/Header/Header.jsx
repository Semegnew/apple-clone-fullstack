import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Resource/images/icons/logo-sm.png';
import search from '../../Resource/images/icons/search-icon-sm.png';
import cart from '../../Resource/images/icons/cart-sm.png';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    if (isNavOpen) {
      toggleNav();
    }
  };

  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            onClick={toggleNav}
          >
            ☰
          </button>
          <Link className="navbar-brand mx-auto" to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <div className={`navbar-collapse collapse ${isNavOpen ? 'show' : ''}`}>
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <Link className="nav-link" to="/mac" onClick={handleLinkClick}>
                  Mac
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/iphone" onClick={handleLinkClick}>
                  iPhone
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ipad" onClick={handleLinkClick}>
                  iPad
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/watch" onClick={handleLinkClick}>
                  Watch
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tv" onClick={handleLinkClick}>
                  TV
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/music" onClick={handleLinkClick}>
                  Music
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support" onClick={handleLinkClick}>
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search" onClick={handleLinkClick}>
                  <img src={search} alt="Search" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart" onClick={handleLinkClick}>
                  <img src={cart} alt="Cart" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;