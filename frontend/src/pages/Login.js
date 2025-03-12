import React, { useState } from 'react';
import '../css/Login.css'; // Importing the CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      alert('Logged in successfully!');
    } else {
      setError('Please fill in both fields');
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
          <div className="mt-4 text-sm">
          <p className="text-gray-700 dark:text-gray-300">
            Don't have an account register here  <a href="/register" className="text-blue-500">Register here</a>
          </p>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
