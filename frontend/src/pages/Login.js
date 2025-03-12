import React, { useState } from 'react';
// import '../css/login';

function Login(){
    // Define state variables to hold the input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      alert('Logged in successfully!');
      // You can add more logic here to handle actual login
    } else {
      setError('Please fill in both fields');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="p-6 w-96 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Login</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="text-left mb-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <div className="text-left mb-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            className="mt-4 w-full px-4 py-2 rounded-lg bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login