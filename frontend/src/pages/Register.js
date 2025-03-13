import React, { useState } from 'react';
import '../css/register.css';
import axios from 'axios';

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

  const [schoolName, setSchoolName] = useState('');
  const [schoolContact, setSchoolContact] = useState('');
  const [schoolType, setSchoolType] = useState('');
  const [schoolLocation, setSchoolLocation] = useState('');
  const [schoolEmail, setSchoolEmail] = useState('');
  const [schoolPassword, setSchoolPassword] = useState('');

  // Medical
  const [medicalName, setMedicalName] = useState('');
  const [medicalContact, setMedicalContact] = useState('');
  const [medicalInsurance, setMedicalInsurance] = useState('');
  const [medicalEmail, setMedicalEmail] = useState('');
  const [medicalPassword, setMedicalPassword] = useState('');
  // Parent
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  const [relationship, setRelationship] = useState('');
  const [prefferedSchool, setPrefferedSchool] = useState('');
  const [numberOfDependents, setNumberOfdependants] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');
  // const navigate = useNavigate(); // Navigation hook

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
  const handleSchoolSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state

    const schoolData = {
        schoolName,
        schoolContact,
        schoolEmail,
        schoolType,
        schoolPassword,
        schoolLocation
    };

    try {


        const response = await fetch('http://localhost:8080/api/register/school', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify(schoolData), // Use schoolData here instead of creating a new object
        });

        if (response.ok) {
            const data = await response.json();
            console.log("School registered successfully:", data);
        } else {
            const errorData = await response.json();
            setError(errorData.message || "Error registering school.");
        }

    } catch (error) {
        setError(error.message);
    }
};


    // Handle form submission
    const handleGuardianSubmit = async (e) => {
      e.preventDefault();
      setError(''); // Reset error state
  
  
      try {
  
        const response = await fetch('http://localhost:8080/api/register/guardian', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name,age,contact,relationship,prefferedSchool,numberOfDependents,password}),
          
        });
  
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Register failed');
  
      } catch (error) {
        setError(error.message);
    
      }
    };

  // Handle form submission
  const handleMedicalSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state


    try {

      const response = await fetch('http://localhost:8080/api/register/medical', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ medicalName, medicalContact,medicalInsurance,medicalEmail,medicalPassword }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Register failed');

    } catch (error) {
      setError(error.message);
  
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
          {/* --------------------------------------PARENT---------------------------------------------------- */}

          {selectedRole === 'parent' && (
            <form onSubmit={handleGuardianSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label className="input-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="input-label">Child's Age</label>
                  <input
                    type="number"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
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
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
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
                    value={relationship}
                    onChange={(e) => setRelationship(e.target.value)}
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
                    value={prefferedSchool}
                    onChange={(e) => setPrefferedSchool(e.target.value)}
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
                    value={numberOfDependents}
                    onChange={(e) => setNumberOfdependants(e.target.value)}
                    className="input-field"
                    required
                    min="1"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label className="input-label">Password</label>
                  <input
                    type="password"
                    name="registerPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
              {error && <p className="input-error">{error}</p>}

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


          {/* --------------------------------------SCHOOL---------------------------------------------------- */}

          {selectedRole === 'school' && (
            <form onSubmit={handleSchoolSubmit}>
              <div className="text-left mb-3">
                <label className="input-label">School Name</label>
                <input
                  type="text"
                  name="schoolName"
                  value={schoolName}

                  onChange={(e) => setSchoolName(e.target.value)}

                  // onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>

              <div className="text-left mb-3">
                <label className="input-label">Contact Number</label>
                <input
                  type="tel"
                  name="schoolContact"
                  value={schoolContact}
                  onChange={(e) => setSchoolContact(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              <div className="text-left mb-3">
                <label className="input-label">School Email</label>
                <input
                  type="email"
                  name="schoolEmail"
                  value={schoolEmail}

                  onChange={(e) => setSchoolEmail(e.target.value)}

                  // onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>

              <div className="text-left mb-3">
                <label className="input-label">School Type</label>
                <select
                  name="schoolType"
                  value={schoolType}
                  onChange={(e) => setSchoolType(e.target.value)}

                  className="input-field"
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>

              <div className="text-left mb-3">
                <label className="input-label">School Password</label>
                <input
                  type="password"
                  name="schoolPasword"
                  value={schoolPassword}

                  onChange={(e) => setSchoolPassword(e.target.value)}

                  // onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>

              <div className="text-left mb-3">
                <label className="input-label">Location</label>
                <input
                  type="text"
                  name="schoolLocation"
                  value={schoolLocation}
                  onChange={(e) => setSchoolLocation(e.target.value)}

                  className="input-field"
                  required
                />
              </div>

              {error && <p className="input-error">{error}</p>}

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


          {/* --------------------------------------MEDICAL---------------------------------------------------- */}
          {selectedRole === 'medical' && (
            <form onSubmit={handleMedicalSubmit}>
              <div className="text-left mb-3">
                <label className="input-label">Medical Provider Name</label>
                <input
                  type="text"
                  name="medicalName"
                  value={medicalName}
                  onChange={(e) => setMedicalName(e.target.value)}
                  className="input-field"
                  required
                />
              </div>

              <div className="text-left mb-3">
                <label className="input-label">Email</label>
                <input
                  type="email"
                  name="medicalEmail"
                  value={medicalEmail}

                  onChange={(e) => setMedicalEmail(e.target.value)}

                  // onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>

              <div className="text-left mb-3">
                <label className="input-label">Contact Number</label>
                <input
                  type="tel"
                  name="medicalContact"
                  value={medicalContact}
                  onChange={(e) => setMedicalContact(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              <div className="text-left mb-3">
                <label className="input-label">Password</label>
                <input
                  type="password"
                  name="medicalPassword"
                  value={medicalPassword}

                  onChange={(e) => setMedicalPassword(e.target.value)}

                  // onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>

              <div className="text-left mb-3">
                <label className="input-label">Medical Insurance Number</label>
                <input
                  type="text"
                  name="medicalInsurance"
                  value={medicalInsurance}
                  onChange={(e) => setMedicalInsurance(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              {error && <p className="input-error">{error}</p>}

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
