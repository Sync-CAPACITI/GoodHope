import React, { useState } from 'react';
// import '../css/register'

function Register(){

      // Form states for different user roles
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
  const handleSubmit = (e) => {
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

    // Show success message and simulate redirection
    alert('Registration Successful! Redirecting to login...');
    // Redirect to login page (you can update with actual routing here)
    window.location.href = '/login';
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
    
                  <div className="text-left mb-3">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Child's Age</label>
                    <input
                      type="number"
                      name="parentAge"
                      value={formData.parentAge}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      required
                      min="1"
                    />
                  </div>
    
                  <div className="text-left mb-3">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Contact Number</label>
                    <input
                      type="tel"
                      name="parentContact"
                      value={formData.parentContact}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      required
                      pattern="^[0-9]{10}$"
                    />
                  </div>
    
                  <div className="text-left mb-3">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Relationship to the Child</label>
                    <input
                      type="text"
                      name="parentRelation"
                      value={formData.parentRelation}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
    
                  <div className="text-left mb-3">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Preferred Schools (Public/Private)</label>
                    <select
                      name="parentSchoolType"
                      value={formData.parentSchoolType}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                    </select>
                  </div>
    
                  <div className="text-left mb-3">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Number of Dependents</label>
                    <input
                      type="number"
                      name="parentDependents"
                      value={formData.parentDependents}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      required
                      min="1"
                    />
                  </div>
    
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
                    {passwordError && <p className="text-red-500 text-xs mt-1">Password must be at least 8 characters, include an uppercase letter, a number, and a special character.</p>}
                  </div>
    
                  <button type="submit" className="mt-4 w-full px-4 py-2 rounded-lg bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Register
                  </button>
                </form>
              )}
    
              {/* Add similar logic for 'school' and 'medical' roles here */}
            </div>
          </div>
        </div>
      );
    };

export default Register