import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import './styles.scss';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="title">
          MovieApp
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <li className="menu-item" onClick={closeMenu}>
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
              Películas
            </NavLink>
          </li>
          <li className="menu-item" onClick={closeMenu}>
            <NavLink to="/serie" className={({ isActive }) => isActive ? "active-link" : ""}>
              Series-TV
            </NavLink>
          </li>
          <li className="menu-item" onClick={closeMenu}>
            <NavLink to="/person" className={({ isActive }) => isActive ? "active-link" : ""}>
              People
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};