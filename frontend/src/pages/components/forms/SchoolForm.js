import React, { useState } from "react";

const SchoolForm = ({ handleSubmit }) => {
  const [schoolData, setSchoolData] = useState({
    schoolName: "",
    email: "",
    contactNumber: "",
    schoolType: "",
    password: "",
    confirmPassword: "",
    address: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setSchoolData({
        ...schoolData,
        address: { ...schoolData.address, [addressField]: value },
      });
    } else {
      setSchoolData({ ...schoolData, [name]: value });
    }
  };

  return (

    <div className="form-card">
      <div className="login-form-card">
        <form onSubmit={(e) => handleSubmit(e, "school", schoolData)} className="login-form">
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            placeholder="School Name"
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
            id="contactNumber"
            name="contactNumber"
            placeholder="Contact Number"
            className="neu-input"
            onChange={handleChange}
          />

          <input
            type="text"
            id="schoolType"
            name="schoolType"
            placeholder="School Type"
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

          <input
            type="text"
            id="address.street"
            name="address.street"
            placeholder="Street"
            className="neu-input"
            onChange={handleChange}
          />

          <input
            type="text"
            id="address.city"
            name="address.city"
            placeholder="City"
            className="neu-input"
            onChange={handleChange}
          />

          <input
            type="text"
            id="address.state"
            name="address.state"
            placeholder="State"
            className="neu-input"
            onChange={handleChange}
          />

          <input
            type="text"
            id="address.postalCode"
            name="address.postalCode"
            placeholder="Postal Code"
            className="neu-input"
            onChange={handleChange}
          />

          <input
            type="text"
            id="address.country"
            name="address.country"
            placeholder="Country"
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

export default SchoolForm;
