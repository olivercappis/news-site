import { Link } from 'react-router-dom';
export default function NavBar() {
    return (
        <div className='container text-center py-4'>
            <h2>YouNews</h2>
            <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-around mb-4">
            <Link to='/'><button className="btn btn-outline-primary">Home</button></Link>
            <Link to='/myNews'><button className="btn btn-outline-primary">My News</button></Link>
            <button className="btn btn-outline-primary">Search</button>
            <Link to='/settings'><button className="btn btn-outline-primary">Settings</button></Link>
            <Link to='/login'><button className="btn btn-outline-danger">Sign Out</button></Link>
        </nav>
      </header>
      </div>
    )
    
}