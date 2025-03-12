import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirection
import '../css/login.css'; // Importing the CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Navigation hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Login failed');

      // Save token to localStorage or sessionStorage
      localStorage.setItem('token', data.token);

      // Redirect user after login
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="text-left mb-3">
            <label className="input-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <div className="text-left mb-3">
            <label className="input-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>

          {error && <p className="input-error">{error}</p>}

          <button type="submit" className="submit-button">
            Login
          </button>

          {/* Forgot Password Link */}
          <div className="forgot-password">
            <p className="text-sm">
              <a href="/forgot-password" className="text-blue-500">Forgot Password?</a>
            </p>
          </div>

          {/* Register Link */}
          <div className="mt-4 text-sm">
            <p className="text-gray-700 dark:text-gray-300">
              Don't have an account? <a href="/register" className="text-blue-500">Register here</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
