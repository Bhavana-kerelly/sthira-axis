import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const isActive = (path) => {
    if (path === '/projects/uma-sreenivas-lakeshore') {
      return location.pathname.startsWith('/projects');
    }
    return location.pathname === path;
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div 
        className="navbar-brand-chip" 
        onClick={handleLogoClick} 
        style={{ cursor: 'pointer' }}
      >
        <img 
          src="/images/logo.png" 
          alt="STHIRA AXIS INFRA" 
          className="navbar-logo-img" 
        />
      </div>

      <div className="navbar-links-chip">
        <Link 
          to="/projects/uma-sreenivas-lakeshore" 
          className={`nav-chip-link ${isActive('/projects/uma-sreenivas-lakeshore') ? 'nav-chip-active' : ''}`}
        >
          PROJECTS
          {isActive('/projects/uma-sreenivas-lakeshore') && <span className="nav-chip-indicator" />}
        </Link>
        <Link 
          to="/philosophy" 
          className={`nav-chip-link ${isActive('/philosophy') ? 'nav-chip-active' : ''}`}
        >
          PHILOSOPHY
          {isActive('/philosophy') && <span className="nav-chip-indicator" />}
        </Link>
        <Link 
          to="/about" 
          className={`nav-chip-link ${isActive('/about') ? 'nav-chip-active' : ''}`}
        >
          ABOUT
          {isActive('/about') && <span className="nav-chip-indicator" />}
        </Link>
        <Link 
          to="/contact" 
          className={`nav-chip-link ${isActive('/contact') ? 'nav-chip-active' : ''}`}
        >
          CONTACT
          {isActive('/contact') && <span className="nav-chip-indicator" />}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
