import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.jpg'; // Adjust path if needed
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Brand */}
        <Link to="/" className="navbar-brand">
  <img src={logo} alt="Logo" />
  <div className="brand-names">
    <span className="brand-name-main">TELACO</span>
    <span className="brand-name-sub">CLEANING SERVICES</span>
  </div>
</Link>



        {/* Hamburger Icon */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <div className="nav-items">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/booking" onClick={() => setMenuOpen(false)}>Booking</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>

          <div className="social-icons">
            <a href="https://wa.me/254700508171" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="tel:+254700508171" title="Call">
              <i className="fas fa-phone-alt"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
