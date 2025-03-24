import React, { useState } from "react";

const GuardianForm = ({ handleSubmit }) => {
  const [guardianData, setGuardianData] = useState({
    name: "",
    lastName: "",
    contactNumber: "",
    email: "",
    preferredSchool: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setGuardianData({ ...guardianData, [e.target.name]: e.target.value });
  };

  return (

    <div className="form-card">
      <div className="login-form-card">
        <form onSubmit={(e) => handleSubmit(e, "guardian", guardianData)} className="login-form">
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
            id="lastName"
            name="lastName"
            placeholder="Last Name"
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
            id="preferredSchool"
            name="preferredSchool"
            placeholder="Preferred School"
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

          <button type="submit" className="submit-button">Register</button>
        </form>
        </div>
        </div>
        );
};

        export default GuardianForm;
