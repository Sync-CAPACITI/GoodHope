import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  background-color: #e0e0e0;
  font-family: "Arial", sans-serif;
`;

const Form = styled.form`
  background: #e0e0e0;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 10px 10px 20px #c8cbcd, -10px -10px 20px rgba(255, 255, 255, 0.75);
  max-width: 600px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
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
  border: none;
  border-radius: 15px;
  background: #e8eaec;
  box-shadow: inset 5px 5px 10px #c8cbcd, inset -5px -5px 10px #ffffff;
  font-size: 1rem;
  color: #333;
  outline: none;
  resize: vertical;
  min-height: 100px;
  grid-column: span 2;
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 15px;
  background: #e8eaec;
  box-shadow: inset 5px 5px 10px #c8cbcd, inset -5px -5px 10px #ffffff;
  font-size: 1rem;
  color: #333;
  outline: none;
  grid-column: span 2; /* Makes it full width */
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.3rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 15px;
  background: rgb(54, 211, 119);
  box-shadow: 5px 5px 10px #c8cbcd, -5px -5px 10px #ffffff;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  grid-column: span 2;

  &:hover {
    box-shadow: 5px 5px 15px #c8cbcd, -5px -5px 15px #ffffff;
    transform: scale(1.05);
  }

  &:active {
    box-shadow: inset 5px 5px 10px #c8cbcd, inset -5px -5px 10px #ffffff;
    transform: scale(0.98);
  }
`;

const SpecialNeedsForm = () => {
  const [formData, setFormData] = useState({
    childName: "",
    childSurname: "",
    childAge: "",
    childGrade: "",
    specialNeedsCategory: "",
    otherNeeds: "",
    medicalHistory: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="childName">Name</Label>
          <Input
            type="text"
            id="childName"
            name="childName"
            placeholder="Enter name"
            value={formData.childName}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="childSurname">Surname</Label>
          <Input
            type="text"
            id="childSurname"
            name="childSurname"
            placeholder="Enter surname"
            value={formData.childSurname}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="childAge">Age</Label>
          <Input
            type="number"
            id="childAge"
            name="childAge"
            placeholder="Enter age"
            value={formData.childAge}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="childGrade">Grade</Label>
          <Input
            type="number"
            id="childGrade"
            name="childGrade"
            placeholder="Enter grade"
            value={formData.childGrade}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <Select
          id="specialNeedsCategory"
          name="specialNeedsCategory"
          value={formData.specialNeedsCategory}
          onChange={handleChange}
          required
        >
          <option value="" disabled selected>
            Special Needs Category
          </option>
          <option value="Autism">Autism</option>
          <option value="Dyslexia">Dyslexia</option>
          <option value="Down Syndrome">Down Syndrome</option>
          <option value="Other">Other</option>
        </Select>

        {formData.specialNeedsCategory === "Other" && (
          <InputGroup style={{ gridColumn: "span 2" }}>
            <Label htmlFor="otherCategory">Please specify:</Label>
            <Input
              type="text"
              id="otherCategory"
              name="otherCategory"
              placeholder="Specify other category"
              value={formData.otherCategory || ""}
              onChange={(e) =>
                setFormData({ ...formData, otherCategory: e.target.value })
              }
              style={{ padding: "8px", marginTop: "8px" }}
            />
          </InputGroup>
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

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default SpecialNeedsForm;
