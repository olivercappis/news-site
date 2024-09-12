import { useState } from 'react'; // Importing only useState

// Exporting the Login component
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle login submission
    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in with', { email, password });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleLogin} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
                <h2>This is a login page</h2>
                
                {/* Email input */}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                
                {/* Password input */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                
                {/* Submit button */}
                <button type="submit" className="btn btn-primary btn-block" style={{ width: '100%' }}>Login</button>
            </form>
        </div>
    );
}
