import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic
  };

  return (
    <div 
      className="container d-flex justify-content-center align-items-center" 
      style={{ height: '100vh' }} // Inline style to center form vertically
    >
      <form className="bg-light p-4 rounded" onSubmit={handleLogin} style={{ width: '300px' }}>
        <div className="form-group mb-3">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            className="form-control" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            className="form-control" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
