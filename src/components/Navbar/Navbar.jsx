import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: targetId } });
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="navbar">
      <div 
        className="navbar-brand" 
        onClick={handleLogoClick} 
        style={{ cursor: 'pointer' }}
      >
        <img src="/images/logo.png" alt="Sthira Axis Infra Logo" style={{ height: '40px', width: 'auto' }} />
      </div>
      <div className="navbar-links">
        <Link to="/projects/uma-sreenivas-lakeshore">PROJECTS</Link>
        <a href="/" onClick={(e) => handleNavClick(e, 'philosophy')}>PHILOSOPHY</a>
        <a href="/" onClick={(e) => handleNavClick(e, 'about')}>ABOUT</a>
        <Link to="/contact">CONTACT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
