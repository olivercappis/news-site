import { Link } from 'react-router-dom';
import logo from '../assets/images/YouNews_logo_transparent-removebg-preview.png'; // Ensure the file path is correct

export default function NavBar() {
  return (
    <div className="container text-center py-4">
      {/* Logo with inline styles */}
      <img
        src={logo}
        alt="Logo"
        style={{
          width: '200px', // Set the width to what you need
          background: 'none', // Ensure no background color or pattern is applied
          border: 'none', // Remove border if not needed
        }}
      />
      {/* Header Navigation */}
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
        </nav>
      </header>
    </div>
  );
}
