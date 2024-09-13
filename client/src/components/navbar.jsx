import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Import the context
import logo from '../assets/images/YouNews_logo_transparent-removebg-preview.png'; 

export default function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Use context

  return (
    <div className="container text-center py-4">
      {/* Logo with inline styles */}
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-around mb-4">
          <Link to="/">
            <button className="btn btn-outline-primary">Home</button>
          </Link>
          <Link to="/myNews">
            <button className="btn btn-outline-primary">My News</button>
          </Link>
          <button className="btn btn-outline-primary">Search</button>
          <Link to="/settings">
            <button className="btn btn-outline-primary">Settings</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-outline-danger">Sign Out</button>
          </Link>
          {/* Add Light/Dark mode toggle button */}
          <button onClick={toggleTheme} className="btn btn-outline-primary">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </nav>
      </header>
    </div>
  );
}
