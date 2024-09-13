import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/YouNews_logo_transparent-removebg-preview.png';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from './ThemeContext';

export default function NavBar() {
  const { isDarkMode } = useContext(ThemeContext);

  // Define inline styles based on the theme
  const navStyle = {
    backgroundColor: isDarkMode ? '#333' : '#f8f9fa', // Dark mode: darker bg
    color: isDarkMode ? '#f1f1f1' : '#000', // Dark mode: light text
  };

  const buttonStyle = {
    backgroundColor: isDarkMode ? '#555' : '#007bff', // Dark mode: greyish buttons
    color: isDarkMode ? '#f1f1f1' : '#fff', // Button text color
  };

  return (
    <div className="container text-center py-4" style={{ backgroundColor: isDarkMode ? '#1a1a1a' : '#fff' }}>
      <img
        src={logo}
        alt="Logo"
        style={{
          width: '200px',
          background: 'none',
          border: 'none',
        }}
      />
      <header>
        <nav className="navbar navbar-expand-lg justify-content-around mb-4" style={navStyle}>
          <Link to="/">
            <button className="btn" style={buttonStyle}>Home</button>
          </Link>
          <Link to="/myNews">
            <button className="btn" style={buttonStyle}>My News</button>
          </Link>
          <button className="btn" style={buttonStyle}>Search</button>
          <Link to="/settings">
            <button className="btn" style={buttonStyle}>Settings</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-outline-danger">Sign Out</button>
          </Link>
          {/* Add the ThemeToggle component */}
          <ThemeToggle />
        </nav>
      </header>
    </div>
  );
}
