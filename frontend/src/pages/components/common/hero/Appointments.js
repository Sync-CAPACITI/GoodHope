import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e8eaec; /* Same background color */
  font-family: 'Arial', sans-serif;
`;

const Form = styled.form`
  background: #e8eaec; /* Same background color */
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 10px 10px 20px #c8cbcd, -10px -10px 20px #ffffff; /* Adjusted shadows */
  max-width: 400px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 15px;
  background: #e8eaec; /* Same background color */
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
  background: #e8eaec; /* Same background color */
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
  background: #e8eaec; /* Same background color */
  box-shadow: 5px 5px 10px #c8cbcd, -5px -5px 10px #ffffff; /* Adjusted shadows */
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 5px 5px 15px #c8cbcd, -5px -5px 15px #ffffff;
    transform: scale(1.02);
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

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    title: '', // New field for title
    notes: '',
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
    console.log('Appointment Data Submitted:', formData);
    // Add your form submission logic here
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      title: '', // Reset title field
      notes: '',
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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

        <Label htmlFor="date">Appointment Date</Label>
        <Input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <Label htmlFor="time">Appointment Time</Label>
        <Input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        {/* New Title Field */}
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

        <Label htmlFor="notes">Additional Notes</Label>
        <TextArea
          id="notes"
          name="notes"
          placeholder="Enter any additional notes"
          value={formData.notes}
          onChange={handleChange}
        />

        <Button type="submit">Book Appointment</Button>
        <ResetButton type="button" onClick={handleReset}>
          Reset
        </ResetButton>
      </Form>
    </Container>
  );
};

export default AppointmentForm;