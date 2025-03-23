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
    <form onSubmit={(e) => handleSubmit(e, "school", schoolData)}>
      <input type="text" name="schoolName" placeholder="School Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} />
      <input type="text" name="schoolType" placeholder="School Type" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
      <input type="text" name="address.street" placeholder="Street" onChange={handleChange} />
      <input type="text" name="address.city" placeholder="City" onChange={handleChange} />
      <input type="text" name="address.state" placeholder="State" onChange={handleChange} />
      <input type="text" name="address.postalCode" placeholder="Postal Code" onChange={handleChange} />
      <input type="text" name="address.country" placeholder="Country" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default SchoolForm;
