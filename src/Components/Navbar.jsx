import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  const logoUrl =
    'https://cdn.dribbble.com/users/220800/screenshots/3576807/media/776aa5ec8600c4429c1992503df36aad.png?compress=1&resize=400x300';

  return (
    <nav className="navbar">
      <img src={logoUrl} alt="Foodies Unite Logo" className="navbar-logo" />
      <span className="navbar-text">Foodies Unite!</span>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/add-recipes">Add Recipes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
