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
    <div className="container py-4">
      {/* Logo centered and resized */}
      <div className="text-center mb-4">
        <img
          src={logo}
          alt="Logo"
          style={{
            width: '150px',  // 25% smaller (adjust from original size)
          }}
        />
      </div>
      
      {/* Header Navigation */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center mb-4">
          <div className="navbar-nav d-flex justify-content-between" style={{ width: '100%', maxWidth: '600px' }}>
            <Link className="nav-item nav-link" to="/">
              <button className="btn btn-outline-primary">Home</button>
            </Link>
            
            {Auth.loggedIn() ? ( 
              <>
                <Link className="nav-item nav-link" to="/myNews">
                  <button className="btn btn-outline-primary">My News</button>
                </Link>

                <Link className="nav-item nav-link" to="/settings">
                  <button className="btn btn-outline-primary">Settings</button>
                </Link>

                <Link className="nav-item nav-link" to="/login">
                  <button className="btn btn-outline-danger" onClick={logout}>Log Out</button>
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-item nav-link" to="/login">
                  <button className="btn btn-outline-primary" onClick={alertMsg}>My News</button>
                </Link>

                <button className="btn btn-outline-primary">Search</button>

                <Link className="nav-item nav-link" to="/login">
                  <button className="btn btn-outline-primary" onClick={alertMsg}>Settings</button>
                </Link>

                <Link className="nav-item nav-link" to="/login">
                  <button className="btn btn-outline-danger">Login / Signup</button>
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
