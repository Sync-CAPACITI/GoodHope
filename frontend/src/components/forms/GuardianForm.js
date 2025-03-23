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
    <form onSubmit={(e) => handleSubmit(e, "guardian", guardianData)}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
      <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="text" name="preferredSchool" placeholder="Preferred School" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default GuardianForm;
