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
    <form onSubmit={(e) => handleSubmit(e, "medical", medicalData)}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="text" name="specialization" placeholder="Specialization" onChange={handleChange} />
      <input type="text" name="yearsOfExperience" placeholder="Years of Experience" onChange={handleChange} />
      <input type="text" name="qualifications" placeholder="Qualifications" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default MedicalPractitionerForm;
