import React, { useState } from 'react';
import '../css/register.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import "../css/register.css";

function Register() {
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    contactNumber: "",
    email: "",
    preferredSchool: "",
    schoolName: "",
    schoolType: "",
    businessName: "",
    specialization: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [responseMessage, setResponseMessage] = useState("");


  // Medical
  const [medicalName, setMedicalName] = useState('');
  const [medicalContact, setMedicalContact] = useState('');
  const [medicalEmail, setMedicalEmail] = useState('');
  const [medicalPassword, setMedicalPassword] = useState('');
  const [medicalSpecialization, setMedicalSpecialization] = useState('');
  const [medicalYearsOfEx, setMedicalYearsOfEx] = useState('');
  const [medicalQualification, setMedicalQualifications] = useState('');
  const [medicalAddress, setMedicalAddress] = useState('');
  const [medicalAddressPopupVisible, setMedicalAddressPopupVisible] = useState(false);
  const [medAddress, setMedAddress] = useState({
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  });

  // Parent
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  const [relationship, setRelationship] = useState('');
  const [prefferedSchool, setPrefferedSchool] = useState('');
  const [numberOfDependents, setNumberOfdependants] = useState('');
  const [password, setPassword] = useState('');
  const schoolOptions = ['Private', 'Public'];
  const [error, setError] = useState('');
  // const navigate = useNavigate(); // Navigation hook

  // Function to validate password
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };


  // Handle role selection
  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    setFormData({
      name: "",
      lastName: "",
      contactNumber: "",
      email: "",
      preferredSchool: "",
      schoolName: "",
      schoolType: "",
      businessName: "",
      specialization: "",
      address: "",
      password: "",
      confirmPassword: "",
    });
    setPasswordError("");
    setResponseMessage("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddressSubmit = () => {
    setSchoolAddress(`${address.street}, ${address.city}, ${address.state}, ${address.postalCode}, ${address.country}`);
    setAddressPopupVisible(false);
  };

  const handleMedicalAddressChange = (e) => {
    const { name, value } = e.target;
    setMedAddress((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleMedicalAddressSubmit = () => {
    setMedicalAddress(`${medAddress.street}, ${medAddress.city}, ${medAddress.state}, ${medAddress.postalCode}, ${medAddress.country}`);
    setMedicalAddressPopupVisible(false);
  };


  // Handle form submission school
  const handleSchoolSubmit = async (e) => {
    e.preventDefault();
    setPasswordError("");
    setResponseMessage("");

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match!");
      return;
    }
    const schoolData = {
      schoolName,
      contactNumber,
      schoolEmail,
      schoolType,
      schoolPassword,
      address: {
        street: address.street,
        city: address.city,
        state: address.state,
        postalCode: address.postalCode,
        country: address.country,
      },
    };

    let apiUrl = "";
    let payload = {};

    switch (selectedRole) {
      case "guardian":
        apiUrl = "http://localhost:8080/api/register/guardian";
        payload = {
          name: formData.name,
          lastName: formData.lastName,
          contactNumber: formData.contactNumber,
          email: formData.email,
          preferredSchool: formData.preferredSchool,
          password: formData.password,
        };
        break;
      case "school":
        apiUrl = "http://localhost:8080/api/register/school";
        payload = {
          schoolName: formData.schoolName,
          email: formData.email,
          contactNumber: formData.contactNumber,
          address: formData.address,
          schoolType: formData.schoolType,
          password: formData.password,
        };
        break;
      case "medical":
        apiUrl = "http://localhost:8080/api/register/medical";
        payload = {
          name: formData.name,
          lastName: formData.lastName,
          businessName: formData.businessName || null,
          specialization: formData.specialization,
          address: formData.address,
          password: formData.password,
        };
        break;
      default:
        return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Registration failed");
      }

      setResponseMessage("Registration successful! You can now log in.");
    } catch (error) {
      // Catch any error from the request and set the error state
      // axios automatically throws an error for non-2xx status codes
      const errorMessage = error.response ? error.response.data.message || error.message : error.message;
      setError(errorMessage);
      console.error("Error registering school:", errorMessage);
      toast.error(`Error Registering School: ${errorMessage}`);
    }
  };

  // Handle form submission
  const handleGuardianSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state


    try {

      const response = await fetch('https://goodhope.onrender.com/api/register/guardian', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, age, contact, relationship, prefferedSchool, numberOfDependents, password }),

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

    const medicalData = {
      medicalName,
      medicalContact,
      medicalEmail,
      medicalPassword,
      medicalSpecialization,
      medicalYearsOfEx,
      medicalQualification,
      medAddress: {
        street: medAddress.street,
        city: medAddress.city,
        state: medAddress.state,
        postalCode: medAddress.postalCode,
        country: medAddress.country,
      },
    }

    try {

      const response = await axios.post('https://goodhope.onrender.com/api/register/medical', medicalData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      // If the request is successful, handle the response data
      console.log("Medical registered successfully:", response.data);
      // You can perform any additional actions like redirecting or showing a success message
      toast.success("Medical Practitioner registered successfully!");
      setTimeout(() => {
        navigate('/login');
      }, 6000);


    } catch (error) {
      const errorMessage = error.response ? error.response.data.message || error.message : error.message;
      setError(errorMessage);
      console.error("Error registering Medical Practitioner:", errorMessage);
      toast.error(`Error Registering Medical Practitioner: ${errorMessage}`);

    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>

      {/* Role Selection */}
      <div className="role-selection">
        {["guardian", "school", "medical"].map((role) => (
          <button
            key={role}
            onClick={() => handleRoleSelection(role)}
            className={`role-button ${selectedRole === role ? "selected" : "unselected"}`}
          >
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        ))}
      </div>

      {/* Registration Form */}
      {selectedRole && (
        <form onSubmit={handleSubmit} className="form-container">
          {/* Guardian Form */}
          {selectedRole === "guardian" && (
            <>
              <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
              <input type="text" name="contactNumber" placeholder="Contact Number" required onChange={handleChange} />
              <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
              <input type="text" name="preferredSchool" placeholder="Preferred School" required onChange={handleChange} />
            </>
          )}

          {/* School Form */}
          {selectedRole === "school" && (
            <>
              <input type="text" name="schoolName" placeholder="School Name" required onChange={handleChange} />
              <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
              <input type="text" name="contactNumber" placeholder="Contact Number" required onChange={handleChange} />
              <input type="text" name="address" placeholder="Address" required onChange={handleChange} />
              <select name="schoolType" required onChange={handleChange}>
                <option value="">Select School Type</option>
                <option value="private">Private</option>
                <option value="public">Public</option>
                <option value="homeschooling">Home Schooling</option>
              </select>
            </>
          )}

          {/* Medical Practitioner Form */}
          {selectedRole === "medical" && (
            <>
              <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
              <input type="text" name="businessName" placeholder="Business Name (Optional)" onChange={handleChange} />
              <input type="text" name="specialization" placeholder="Specialization" required onChange={handleChange} />
              <input type="text" name="address" placeholder="Address" required onChange={handleChange} />
            </>
          )}

          {/* Password Fields */}
          <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" required onChange={handleChange} />
          {passwordError && <p className="error-message">{passwordError}</p>}

          <button type="submit" className="submit-button">Register</button>
        </form>
      )}

      {/* Response Message */}
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </div>
  );
}

export default Register;
