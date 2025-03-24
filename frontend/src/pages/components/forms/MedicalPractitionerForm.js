import React, { useState } from "react";

const MedicalPractitionerForm = ({ handleSubmit }) => {
  const [medicalData, setMedicalData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    specialization: "",
    yearsOfExperience: "",
    qualifications: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setMedicalData({ ...medicalData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-card">
      <div className="login-form-card">
        <form onSubmit={(e) => handleSubmit(e, "medical", medicalData)} className="login-form">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="neu-input"
            onChange={handleChange}
          />

          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            placeholder="Contact Number"
            className="neu-input"
            onChange={handleChange}
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="neu-input"
            onChange={handleChange}
          />

          <input
            type="text"
            id="specialization"
            name="specialization"
            placeholder="Specialization"
            className="neu-input"
            onChange={handleChange}
          />

          <input
            type="text"
            id="yearsOfExperience"
            name="yearsOfExperience"
            placeholder="Years of Experience"
            className="neu-input"
            onChange={handleChange}
          />

          <input
            type="text"
            id="qualifications"
            name="qualifications"
            placeholder="Qualifications"
            className="neu-input"
            onChange={handleChange}
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="neu-input"
            onChange={handleChange}
          />

          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="neu-input"
            onChange={handleChange}
          />

          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
      </div>
    </div>

  );
};

export default MedicalPractitionerForm;
