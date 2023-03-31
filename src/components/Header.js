import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">Logo</div>
        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <div className="dropdown">
          <button className="dropbtn">&#9776;</button>
          <div className="dropdown-content">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
