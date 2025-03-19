import React, { useState } from 'react';
import '../css/register.css'; // Importing the CSS file

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

  // Function to validate password
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  // Handle input changes and update the state
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

    // Password validation
    if (!validatePassword(registerPassword)) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    const fields = Object.values(formData);
    if (fields.includes('') || fields.includes(null)) {
      alert('Please fill all required fields.');
      return;
    }

    const dataToSend = { ...formData };

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Registration Successful! Redirecting to login...');
        window.location.href = '/login';
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'Something went wrong'}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Register</h2>

        <div className="role-selection">
          <button
            onClick={() => handleRoleSelection('parent')}
            className={`role-button ${selectedRole === 'parent' ? 'selected' : 'unselected'}`}
          >
            Parent
          </button>
          <button
            onClick={() => handleRoleSelection('school')}
            className={`role-button ${selectedRole === 'school' ? 'selected' : 'unselected'}`}
          >
            School
          </button>
          <button
            onClick={() => handleRoleSelection('medical')}
            className={`role-button ${selectedRole === 'medical' ? 'selected' : 'unselected'}`}
          >
            Medical
          </button>
        </div>

        <div className="form-container">
          {selectedRole === 'parent' && (
            <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label className="input-label">Full Name</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
          
              <div className="form-field">
                <label className="input-label">Child's Age</label>
                <input
                  type="number"
                  name="parentAge"
                  value={formData.parentAge}
                  onChange={handleChange}
                  className="input-field"
                  required
                  min="1"
                />
              </div>
            </div>
          
            <div className="form-row">
              <div className="form-field">
                <label className="input-label">Contact Number</label>
                <input
                  type="tel"
                  name="parentContact"
                  value={formData.parentContact}
                  onChange={handleChange}
                  className="input-field"
                  required
                  pattern="^[0-9]{10}$"
                />
              </div>
          
              <div className="form-field">
                <label className="input-label">Relationship to the Child</label>
                <input
                  type="text"
                  name="parentRelation"
                  value={formData.parentRelation}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
            </div>
          
            <div className="form-row">
              <div className="form-field">
                <label className="input-label">Preferred Schools (Public/Private)</label>
                <select
                  name="parentSchoolType"
                  value={formData.parentSchoolType}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>
          
              <div className="form-field">
                <label className="input-label">Number of Dependents</label>
                <input
                  type="number"
                  name="parentDependents"
                  value={formData.parentDependents}
                  onChange={handleChange}
                  className="input-field"
                  required
                  min="1"
                />
              </div>
            </div>
          
            <div className="form-row">
              <div className="form-field">
                <label className="input-label">Email</label>
                <input
                  type="email"
                  name="registerEmail"
                  value={formData.registerEmail}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
          
              <div className="form-field">
                <label className="input-label">Password</label>
                <input
                  type="password"
                  name="registerPassword"
                  value={formData.registerPassword}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
                {passwordError && (
                  <p className="input-error">
                    Password must be at least 8 characters, include an uppercase letter, a number, and a special character.
                  </p>
                )}
              </div>
            </div>
          
            <button type="submit" className="submit-button">
              Register
            </button>
          
            <div className="mt-4 text-sm">
              <p className="text-gray-700 dark:text-gray-300">
                Already registered? <a href="/login" className="text-blue-500">Login here</a>
              </p>
            </div>
          </form>
          
          )}

          {selectedRole === 'school' && (
            <form onSubmit={handleSubmit}>
              <div className="text-left mb-3">
                <label className="input-label">School Name</label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>

              <div className="text-left mb-3">
                <label className="input-label">Contact Number</label>
                <input
                  type="tel"
                  name="schoolContact"
                  value={formData.schoolContact}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>

              <div className="text-left mb-3">
                <label className="input-label">School Type</label>
                <select
                  name="schoolType"
                  value={formData.schoolType}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>

              <div className="text-left mb-3">
                <label className="input-label">Location</label>
                <input
                  type="text"
                  name="schoolLocation"
                  value={formData.schoolLocation}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Register
              </button>
              <div className="mt-4 text-sm">
          <p className="text-gray-700 dark:text-gray-300">
            Already registered? <a href="/login" className="text-blue-500">Login here</a>
          </p>
        </div>
            </form>
          )}

          {selectedRole === 'medical' && (
            <form onSubmit={handleSubmit}>
              <div className="text-left mb-3">
                <label className="input-label">Medical Provider Name</label>
                <input
                  type="text"
                  name="medicalProvider"
                  value={formData.medicalProvider}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>

              <div className="text-left mb-3">
                <label className="input-label">Contact Number</label>
                <input
                  type="tel"
                  name="medicalContact"
                  value={formData.medicalContact}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>

              <div className="text-left mb-3">
                <label className="input-label">Medical Insurance Number</label>
                <input
                  type="text"
                  name="medicalInsurance"
                  value={formData.medicalInsurance}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Register
              </button>
              <div className="mt-4 text-sm">
          <p className="text-gray-700 dark:text-gray-300">
            Already registered? <a href="/login" className="text-blue-500">Login here</a>
          </p>
        </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
