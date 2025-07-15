import "../css/components/Nav.scss";
import { Link, useLocation } from "react-router";

function Nav() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link 
          className={`navbar-brand fw-bold ${location.pathname === '/' ? 'active' : ''}`} 
          to="/"
        >
          John Doe
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                to="/"
              >
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} 
                to="/services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/realisations' ? 'active' : ''}`} 
                to="/realisations"
              >
                Réalisations
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`} 
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} 
                to="/contact"
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