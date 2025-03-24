import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirection
import '../css/login.css'; // Importing the CSS file
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Navigation hook

  const getCsrfToken = () => {
    return document.cookie
        .split(';')
        .find(cookie => cookie.trim().startsWith('XSRF-TOKEN='))
        ?.split('=')[1];  // Extract the token value
}

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const credentials = { email, password };

    try {
      const csrfToken = getCsrfToken();  // Get CSRF token from cookies
        const response = await axios.post('http://localhost:8080/api/app/login', credentials,{
          headers: {
            'X-XSRF-TOKEN': csrfToken,  // Add CSRF token here
          }
        });
        const { role } = response.data; // Extract 'role' directly from response.data

        if (role === 'School') {
            navigate('/schoolDashboard');
        } else if (role === 'Medical') {
            navigate('/healthCareDashboard');
        } else if (role === 'Guardian') {
            navigate('/parentDashboard');
        }
    } catch (error) {
      toast.error(`Error Login: ${error}`);
        setError('Invalid email or password.');
    }
};

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        <form onSubmit={handleLogin} className="login-form">
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
      <ToastContainer />
    </div>
  );
}

export default Login;
