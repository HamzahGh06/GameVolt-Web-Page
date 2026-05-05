import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="site-header">
      <div className="nav-content">
        <div className="nav-links">
          <Link to="/register" className="nav-cta">Create Account</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/" className="nav-link">Main</Link>
        </div>

        <div className="brand">
          Game<span>Volt</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;