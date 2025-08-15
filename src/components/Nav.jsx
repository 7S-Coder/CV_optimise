import "../css/components/Nav.scss";
import { Link, useLocation } from "react-router";
import { useState } from "react";

function Nav() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link 
          className={`navbar-brand fw-bold ${location.pathname === '/' ? 'active' : ''}`} 
          to="/"
          onClick={closeMenu}
        >
          John Doe
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                to="/"
                onClick={closeMenu}
              >
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} 
                to="/services"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/realisations' ? 'active' : ''}`} 
                to="/realisations"
                onClick={closeMenu}
              >
                Réalisations
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`} 
                to="/blog"
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} 
                to="/contact"
                onClick={closeMenu}
              >
                Me contacter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav