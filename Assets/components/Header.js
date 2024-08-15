import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Optional: for styling

const Header = () => (
  <header>
    <h1>My Portfolio</h1>
    <nav>
      <ul>
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
