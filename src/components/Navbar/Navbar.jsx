import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../../src/assets/images/logo.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Burger menu button */}
      <div className="burger-menu" onClick={handleMenuToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Menu toggle button */}
      <button className="menu-toggle" onClick={handleMenuToggle}>
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#history">History</a></li>
        <li><a href="#literature">Literature</a></li>
        <li><a href="#cinematography">Cinematography</a></li> {/* Added Cinematography link */}
      </ul>
    </nav>
  );
}

export default Navbar;
