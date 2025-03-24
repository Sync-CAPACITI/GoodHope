import React, { useState } from "react";
import "../css/register.css";

function Register() {
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
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

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    setFormData({
      firstName: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPasswordError("");
    setResponseMessage("");

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match!");
      return;
    }

    let apiUrl = "";
    let payload = {};

    switch (selectedRole) {
      case "guardian":
        apiUrl = "http://localhost:8080/api/register/guardian";
        payload = {
          firstName: formData.firstName,
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
          firstName: formData.firstName,
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
      setResponseMessage(`Error: ${error.message}`);
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
