import { Link } from 'react-router-dom';
import logo from '../assets/images/YouNews_logo_transparent-removebg-preview.png'; // Ensure the file path is correct

import Auth from '../utils/auth';

export default function NavBar() {
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
          
          {Auth.loggedIn() ? ( 
            <>
              <Link to="/myNews">
                <button className="btn btn-outline-primary">My News</button>
              </Link>
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

              <button className="btn btn-outline-primary">Search</button>

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