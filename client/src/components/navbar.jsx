import { Link } from 'react-router-dom';
import { useState } from 'react'; // Use state for search
import logo from '../assets/images/YouNews_logo_transparent-removebg-preview.png'; // Ensure the file path is correct
import Auth from '../utils/auth';

export default function NavBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState(''); // State to store search term

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm); // Call the function passed via props with the search query
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const alertMsg = () => {
    alert('You must be logged in to use this feature!');
  }

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
          
          {Auth.loggedIn() ? (
            <>
              <Link to="/myNews">
                <button className="btn btn-outline-primary">My News</button>
              </Link>

              {/* Search Form */}
              <form onSubmit={handleSearch} className="d-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                />
                <button className="btn btn-outline-primary" type="submit">Search</button>
              </form>

              <Link to="/settings">
                <button className="btn btn-outline-primary">Settings</button>
              </Link>
              <Link to="/login">
                <button className="btn btn-outline-danger" onClick={logout}>Log Out</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-outline-primary" onClick={alertMsg}>My News</button>
              </Link>

              {/* Delete if not useable */}
              <form onSubmit={handleSearch} className="d-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                />
                <button className="btn btn-outline-primary" type="submit">Search</button>
              </form>

              <Link to="/login">
                <button className="btn btn-outline-primary" onClick={alertMsg}>Settings</button>
              </Link>
              <Link to="/login">
                <button className="btn btn-outline-danger">Login / Signup</button>
              </Link>
            </>
          )}
        </nav>
      </header>
    </div>
  );
}