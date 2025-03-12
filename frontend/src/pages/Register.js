import React, { useState } from 'react';

function Register() {
  const [selectedRole, setSelectedRole] = useState('parent');
  const [formData, setFormData] = useState({
    parentName: '',
    parentAge: '',
    parentContact: '',
    parentRelation: '',
    parentSchoolType: 'public',
    parentDependents: '',
    registerEmail: '',
    registerPassword: '',
    schoolName: '',
    schoolContact: '',
    schoolType: 'public',
    schoolLocation: '',
    medicalProvider: '',
    medicalContact: '',
    medicalInsurance: ''
  });

  const [passwordError, setPasswordError] = useState(false);

  // Password validation function
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle role selection
  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { registerEmail, registerPassword } = formData;

    // Check password validity
    if (!validatePassword(registerPassword)) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    // Check if all required fields are filled
    const fields = Object.values(formData);
    if (fields.includes('') || fields.includes(null)) {
      alert('Please fill all required fields.');
      return;
    }

    // Create an object with the data to send to the backend
    const dataToSend = { ...formData };

    try {
      // Replace with your actual backend endpoint
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend), // Send form data as JSON
      });

      if (response.ok) {
        // Handle successful registration
        const result = await response.json(); // Parse the response (if any)
        alert('Registration Successful! Redirecting to login...');
        window.location.href = '/login'; // Redirect to login page after success
      } else {
        // Handle errors from the backend
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'Something went wrong'}`);
      }
    } catch (error) {
      // Handle network or other errors
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="p-6 w-3/4 h-[70vh] mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Register</h2>
        <div className="flex justify-center mb-4">
          <button
            onClick={() => handleRoleSelection('parent')}
            className={`mx-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${selectedRole === 'parent' ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}`}
          >
            Parent
          </button>
          <button
            onClick={() => handleRoleSelection('school')}
            className={`mx-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${selectedRole === 'school' ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}`}
          >
            School
          </button>
          <button
            onClick={() => handleRoleSelection('medical')}
            className={`mx-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${selectedRole === 'medical' ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}`}
          >
            Medical
          </button>
        </div>

        <div className="border p-4 rounded-lg">
          {/* Parent Form */}
          {selectedRole === 'parent' && (
            <form onSubmit={handleSubmit}>
              <div className="text-left mb-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              {/* Other Parent fields go here */}

              {/* Email and Password */}
              <div className="text-left mb-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  name="registerEmail"
                  value={formData.registerEmail}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div className="text-left mb-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                <input
                  type="password"
                  name="registerPassword"
                  value={formData.registerPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  required
                />
                {passwordError && (
                  <p className="text-red-500 text-xs mt-1">Password must be at least 8 characters, include an uppercase letter, a number, and a special character.</p>
                )}
              </div>

              <button type="submit" className="mt-4 w-full px-4 py-2 rounded-lg bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                Register
              </button>
            </form>
          )}

          {/* School Form */}
          {selectedRole === 'school' && (
            <form onSubmit={handleSubmit}>
              <div className="text-left mb-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">School Name</label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              {/* Other School fields go here */}

              <button type="submit" className="mt-4 w-full px-4 py-2 rounded-lg bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                Register
              </button>
            </form>
          )}

          {/* Medical Form */}
          {selectedRole === 'medical' && (
            <form onSubmit={handleSubmit}>
              <div className="text-left mb-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Medical Provider</label>
                <input
                  type="text"
                  name="medicalProvider"
                  value={formData.medicalProvider}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              {/* Other Medical fields go here */}

              <button type="submit" className="mt-4 w-full px-4 py-2 rounded-lg bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                Register
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
