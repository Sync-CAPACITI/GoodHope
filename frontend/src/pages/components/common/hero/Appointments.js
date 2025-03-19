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
  grid-column: span 2;
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

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    title: "",
    notes: "",
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
    console.log("Appointment Data Submitted:", formData);
    // Add your form submission logic here
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      title: "",
      notes: "",
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="name">Full Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="date">Appointment Date</Label>
          <Input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="time">Appointment Time</Label>
          <Input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Enter a title for your appointment"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="notes">Additional Notes</Label>
          <TextArea
            id="notes"
            name="notes"
            placeholder="Enter any additional notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </InputGroup>

        <Button type="submit">Book Appointment</Button>
        <ResetButton type="button" onClick={handleReset}>
          Reset
        </ResetButton>
      </Form>
    </Container>
  );
};

export default AppointmentForm;
