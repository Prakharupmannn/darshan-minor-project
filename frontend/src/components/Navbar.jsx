import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <span style={{ fontSize: '1.8rem', color: 'var(--primary-color)' }}>ॐ</span>
        DarshanEase
      </Link>
      
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/#temples" className="nav-link">Temples</Link>
        <Link to="/book" className="nav-link">Book Darshan</Link>
        <Link to="/login" className="nav-btn">Login / Sign up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
