import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e8eaec;
  font-family: "Arial", sans-serif;
`;

const Form = styled.form`
  background: #e8eaec;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 10px 10px 20px #c8cbcd, -10px -10px 20px #ffffff;
  max-width: 600px; /* Increased max-width to accommodate two columns */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Create a two-column grid */
  gap: 1rem; /* Space between grid items */
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 0;
  border: none;
  border-radius: 15px;
  background: #e8eaec;
  box-shadow: inset 5px 5px 10px #c8cbcd, inset -5px -5px 10px #ffffff;
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
  margin: 0;
  border: none;
  border-radius: 15px;
  background: #e8eaec;
  box-shadow: inset 5px 5px 10px #c8cbcd, inset -5px -5px 10px #ffffff;
  font-size: 1rem;
  color: #333;
  outline: none;
  resize: vertical;
  min-height: 100px;
  grid-column: span 2; /* Make text area span both columns */
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  margin: 0;
  border: none;
  border-radius: 15px;
  background: #e8eaec;
  box-shadow: inset 5px 5px 10px #c8cbcd, inset -5px -5px 10px #ffffff;
  font-size: 1rem;
  color: #333;
  outline: none;
`;

const FileInput = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 0;
  border: none;
  border-radius: 15px;
  background: #e8eaec;
  box-shadow: inset 5px 5px 10px #c8cbcd, inset -5px -5px 10px #ffffff;
  font-size: 1rem;
  color: #333;
  outline: none;

  &::file-selector-button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 10px;
    background: #e8eaec;
    box-shadow: 5px 5px 10px #c8cbcd, -5px -5px 10px #ffffff;
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
  grid-column: span 2; /* Make label span both columns */
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  border: none;
  border-radius: 15px;
  background: rgba(255, 174, 0, 0.9);
  box-shadow: 5px 5px 10px #c8cbcd, -5px -5px 10px #ffffff;
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
  box-shadow: 5px 5px 10px #c8cbcd, -5px -5px 10px #ffffff;

  &:hover {
    box-shadow: 5px 5px 15px #c8cbcd, -5px -5px 15px #ffffff;
  }

  &:active {
    box-shadow: inset 5px 5px 10px #c8cbcd, inset -5px -5px 10px #ffffff;
  }
`;

// Form component that allows editing the child's profile
const SpecialNeedsForm = ({ initialData }) => {
  const [formData, setFormData] = useState(initialData);
  const [isEditable, setIsEditable] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your form submission logic nganeno
    setIsEditable(false);
  };

  const toggleEditMode = () => {
    setIsEditable(!isEditable);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="childName">Name</Label>
        <Input
          type="text"
          id="childName"
          name="childName"
          placeholder="Enter name"
          value={formData.childName}
          onChange={handleChange}
          required
          readOnly={!isEditable}
        />

        <Label htmlFor="childSurname">Surname</Label>
        <Input
          type="text"
          id="childSurname"
          name="childSurname"
          placeholder="Enter surname"
          value={formData.childSurname}
          onChange={handleChange}
          required
          readOnly={!isEditable}
        />

        <Label htmlFor="childAge">Age</Label>
        <Input
          type="number"
          id="childAge"
          name="childAge"
          placeholder="Enter child's age"
          value={formData.childAge}
          onChange={handleChange}
          required
          readOnly={!isEditable}
        />

        <Label htmlFor="childGrade">Grade</Label>
        <Input
          type="number"
          id="childGrade"
          name="childGrade"
          placeholder="Enter child's grade"
          value={formData.childGrade}
          onChange={handleChange}
          required
          readOnly={!isEditable}
        />

        <Label htmlFor="specialNeedsCategory">Special Needs Category</Label>
        <Select
          id="specialNeedsCategory"
          name="specialNeedsCategory"
          value={formData.specialNeedsCategory}
          onChange={handleChange}
          required
          disabled={!isEditable}
        >
          <option value="">Select a category</option>
          <option value="Autism">Autism</option>
          <option value="Dyslexia">Dyslexia</option>
          <option value="Down Syndrome">Down Syndrome</option>
          <option value="Other">Other</option>
        </Select>

        {formData.specialNeedsCategory === "Other" && (
          <>
            <Label htmlFor="otherNeeds">Specify Other Needs</Label>
            <Input
              type="text"
              id="otherNeeds"
              name="otherNeeds"
              placeholder="Enter other special needs"
              value={formData.otherNeeds}
              onChange={handleChange}
              required={formData.specialNeedsCategory === "Other"}
              readOnly={!isEditable}
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
          readOnly={!isEditable}
        />

        <Label htmlFor="medicalDocuments">Upload Medical Documents</Label>
        <FileInput
          type="file"
          id="medicalDocuments"
          name="medicalDocuments"
          onChange={handleChange}
          disabled={!isEditable}
        />

        {isEditable ? (
          <>
            <Button type="submit">Save</Button>
            <ResetButton type="button" onClick={handleReset}>
              Reset
            </ResetButton>
          </>
        ) : (
          <Button type="button" onClick={toggleEditMode}>
            Update
          </Button>
        )}
      </Form>
    </Container>
  );
};

// Usage of SpecialNeedsForm component
const App = () => {
  return <SpecialNeedsForm initialData={initialData} />;
};

export default App;
