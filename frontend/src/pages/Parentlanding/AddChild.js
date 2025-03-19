import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e8eaec; /* Updated background color */
  font-family: 'Arial', sans-serif;
`;

const Form = styled.form`
  background: #e8eaec; /* Updated background color */
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 10px 10px 20px #c8cbcd, -10px -10px 20px #ffffff; /* Adjusted shadows for new background */
  max-width: 400px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 15px;
  background: #e8eaec; /* Updated background color */
  box-shadow: inset 5px 5px 10px #c8cbcd, inset -5px -5px 10px #ffffff; /* Adjusted shadows */
  font-size: 1rem;
  color: #333;
  outline: none;

  &::placeholder {
    color: #888;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 15px;
  background: #e8eaec; /* Updated background color */
  box-shadow: inset 5px 5px 10px #c8cbcd, inset -5px -5px 10px #ffffff; /* Adjusted shadows */
  font-size: 1rem;
  color: #333;
  outline: none;
  resize: vertical;
  min-height: 100px;

  &::placeholder {
    color: #888;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 15px;
  background: #e8eaec; /* Updated background color */
  box-shadow: inset 5px 5px 10px #c8cbcd, inset -5px -5px 10px #ffffff; /* Adjusted shadows */
  font-size: 1rem;
  color: #333;
  outline: none;
`;

const FileInput = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 15px;
  background: #e8eaec; /* Updated background color */
  box-shadow: inset 5px 5px 10px #c8cbcd, inset -5px -5px 10px #ffffff; /* Adjusted shadows */
  font-size: 1rem;
  color: #333;
  outline: none;

  &::file-selector-button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 10px;
    background: #e8eaec; /* Updated background color */
    box-shadow: 5px 5px 10px #c8cbcd, -5px -5px 10px #ffffff; /* Adjusted shadows */
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      box-shadow: inset 5px 5px 10px #c8cbcd, inset -5px -5px 10px #ffffff;
    }
  }
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.5rem;
  display: block;
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  border: none;
  border-radius: 15px;
  background:rgb(54, 211, 119);
  box-shadow: 5px 5px 10px #c8cbcd, -5px -5px 10px #ffffff; /* Adjusted shadows */
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 5px 5px 15px #c8cbcd, -5px -5px 15px #ffffff;
    transform: scale(1.1);
  }

  &:active {
    box-shadow: inset 5px 5px 10px #c8cbcd, inset -5px -5px 10px #ffffff;
    transform: scale(0.98);
  }
`;

const ResetButton = styled(Button)`
  background: #ff6b6b;
  color: #fff;
  box-shadow: 5px 5px 10px #c8cbcd, -5px -5px 10px #ffffff; /* Adjusted shadows */

  &:hover {
    box-shadow: 5px 5px 15px #c8cbcd, -5px -5px 15px #ffffff;
  }

  &:active {
    box-shadow: inset 5px 5px 10px #c8cbcd, inset -5px -5px 10px #ffffff;
  }
`;

const SpecialNeedsForm = () => {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    specialNeedsCategory: '',
    otherNeeds: '',
    medicalHistory: '',
    medicalDocuments: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add your form submission logic here
  };

  const handleReset = () => {
    setFormData({
      childName: '',
      childAge: '',
      specialNeedsCategory: '',
      otherNeeds: '',
      medicalHistory: '',
      medicalDocuments: null,
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="childName">Child's Full Name</Label>
        <Input
          type="text"
          id="childName"
          name="childName"
          placeholder="Enter child's full name"
          value={formData.childName}
          onChange={handleChange}
          required
        />

        <Label htmlFor="childAge">Child's Age</Label>
        <Input
          type="number"
          id="childAge"
          name="childAge"
          placeholder="Enter child's age"
          value={formData.childAge}
          onChange={handleChange}
          required
        />

        <Label htmlFor="specialNeedsCategory">Special Needs Category</Label>
        <Select
          id="specialNeedsCategory"
          name="specialNeedsCategory"
          value={formData.specialNeedsCategory}
          onChange={handleChange}
          required
        >
          <option value="">Select a category</option>
          <option value="Autism">Autism</option>
          <option value="Dyslexia">Dyslexia</option>
          <option value="Down Syndrome">Down Syndrome</option>
          <option value="Other">Other</option>
        </Select>

        {formData.specialNeedsCategory === 'Other' && (
          <>
            <Label htmlFor="otherNeeds">Specify Other Needs</Label>
            <Input
              type="text"
              id="otherNeeds"
              name="otherNeeds"
              placeholder="Enter other special needs"
              value={formData.otherNeeds}
              onChange={handleChange}
              required
            />
          </>
        )}

        <Label htmlFor="medicalHistory">Medical History</Label>
        <TextArea
          id="medicalHistory"
          name="medicalHistory"
          placeholder="Describe medical history"
          value={formData.medicalHistory}
          onChange={handleChange}
          required
        />

        <Label htmlFor="medicalDocuments">Upload Medical Documents</Label>
        <FileInput
          type="file"
          id="medicalDocuments"
          name="medicalDocuments"
          onChange={handleChange}
        />

        <Button type="submit">Register</Button>
        <ResetButton type="button" onClick={handleReset}>
          Reset
        </ResetButton>
      </Form>
    </Container>
  );
};

export default SpecialNeedsForm;