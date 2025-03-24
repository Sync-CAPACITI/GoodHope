import React, { useState } from 'react';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';
import Header from "../components/common/header/Header";
import GuardianForm from "./components/forms/GuardianForm";
import SchoolForm from "./components/forms/SchoolForm";
import MedicalPractitionerForm from "./components/forms/MedicalPractitionerForm";
import Footer from '../components/common/footer/footer';

const Register = () => {
  const [selectedRole, setSelectedRole] = useState("guardian"); // Initialize with "guardian"

  const navigate = useNavigate();

  const handleSubmit = async (e, role, formData) => {
    e.preventDefault();
    let apiUrl = "";

    switch (role) {
      case "guardian":
        apiUrl = "https://goodhope.onrender.com/api/register/guardian";
        break;
      case "school":
        apiUrl = "https://goodhope.onrender.com/api/register/school";
        break;
      case "medical":
        apiUrl = "https://goodhope.onrender.com/api/register/medical";
        break;
      default:
        return;
    }

    
    try {
      const response = await axios.post(apiUrl, formData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
    
      if (response.data) {
        toast.success("Registration successful!");
        setTimeout(() => {
          navigate('/login');
        }, 6000); // 6000 milliseconds = 6 seconds
      }
    } catch (error) {
      // Check if the error response contains the specific message
      const errorMessage = error.response?.data || "An unexpected error occurred";
      toast.error(errorMessage); // Displays the backend error message
    }
    
  };

  return (
       <div className="register-container">
       < Header/>
      <h1>Register</h1>
      <div>
        <button onClick={() => setSelectedRole("guardian")}>Guardian</button>
        <button onClick={() => setSelectedRole("school")}>School</button>
        <button onClick={() => setSelectedRole("medical")}>Medical Practitioner</button>
      </div>
      {selectedRole === "guardian" && <GuardianForm handleSubmit={handleSubmit} />}
      {selectedRole === "school" && <SchoolForm handleSubmit={handleSubmit} />}
      {selectedRole === "medical" && <MedicalPractitionerForm handleSubmit={handleSubmit} />}
    < Footer />
     < ToastContainer/>
    </div>
   
  );
};

export default Register;
