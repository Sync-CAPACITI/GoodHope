import React, { useState } from 'react';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import "../css/register.css";

import GuardianForm from "./components/forms/GuardianForm";
import SchoolForm from "./components/forms/SchoolForm";
import MedicalPractitionerForm from "./components/forms/MedicalPractitionerForm";

const Register = () => {
  const [selectedRole, setSelectedRole] = useState("");

  const handleSubmit = async (e, role, formData) => {
    e.preventDefault();
    let apiUrl = "";

    switch (role) {
      case "guardian":
        apiUrl = "http://localhost:8080/api/register/guardian";
        break;
      case "school":
        apiUrl = "http://localhost:8080/api/register/school";
        break;
      case "medical":
        apiUrl = "http://localhost:8080/api/register/medical";
        break;
      default:
        return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Registration failed");
      alert("Registration successful!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error during registration.");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <div>
        <button onClick={() => setSelectedRole("guardian")}>Guardian</button>
        <button onClick={() => setSelectedRole("school")}>School</button>
        <button onClick={() => setSelectedRole("medical")}>Medical Practitioner</button>
      </div>
      {selectedRole === "guardian" && <GuardianForm handleSubmit={handleSubmit} />}
      {selectedRole === "school" && <SchoolForm handleSubmit={handleSubmit} />}
      {selectedRole === "medical" && <MedicalPractitionerForm handleSubmit={handleSubmit} />}
    </div>
  );
};

export default Register;
