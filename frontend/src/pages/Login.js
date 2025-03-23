import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'; // Import Axios
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/login.css'; // Importing the CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const getCsrfToken = () => {
    const csrfCookie = document.cookie
        .split(';')
        .find(cookie => cookie.trim().startsWith('XSRF-TOKEN='));
    if (!csrfCookie) {
        throw new Error("CSRF token not found in cookies");
    }
    return csrfCookie.split('=')[1];
};


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const credentials = { email, password };
    try {
      // const csrfToken = getCsrfToken();  // Get CSRF token from cookies
        const response = await axios.post('http://localhost:8080/api/auth/login', credentials);
        // ,{
        //   headers: {
        //     'X-XSRF-TOKEN': csrfToken,  // Add CSRF token here
        //   }
        // });
        const { role } = response.data; // Extract role from response
        setLoading(false);
    
        if (role === 'Guardian') {
          navigate('/ParentDashboard');
        } else if (role === 'School') {
          navigate('/SchoolDashboard');
        } else if (role === 'Medical') {
          navigate('/HealthCareAdmin');
        } else {
          throw new Error('Unknown user role');
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

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="forgot-password">
          <p>
            <Link to="/forgot-password" className="text-blue-500">Forgot Password?</Link>
          </p>
        </div>

        <div className="mt-4">
          <p>
            Don't have an account? <Link to="/register" className="text-blue-500">Register here</Link>
          </p>
        </div>
      </form>
    </div>
    <ToastContainer />
  </div>
);
}

export default Login;