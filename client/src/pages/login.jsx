// login.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

export default function Login() {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });

  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {data ? (
        <p> Success! You may now head{' '}
        <Link to="/">back to the homepage.</Link>
        </p>
        ) : (
              <form onSubmit={handleLogin} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
                <h2>Login</h2>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login</button>
                <Link to="/signup">
                  <button type="button" className="btn btn-secondary" style={{ width: '100%', marginTop: '10px' }}>Sign Up</button>
                </Link>
              </form>
            )}
        {error && (
          <div className="my-3 p-3 bg-danger text-white">
            {error.message}
          </div>
        )}
    </div>
  );
}
