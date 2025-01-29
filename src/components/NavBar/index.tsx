import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './styles.scss';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <li className="menu-item">Películas</li>
          <li className="menu-item">Series-TV</li>
          <li className="menu-item">People</li>
        </ul>
      </div>
    </nav>
  );
};