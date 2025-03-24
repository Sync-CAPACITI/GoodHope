import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: auto;
  background-color: #e0e0e0;
  font-family: "Arial", sans-serif;
  padding: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const AppointmentsDetails = styled.div`
  width: 45%;
  margin-top: 30px;
  padding: 15px;
  background-color: #e0e0e0;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #aaaaaa, -5px -5px 10px #ffffff;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #1f3e72;
`;

const AppointmentCard = styled.div`
  background: #e0e0e0;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.7);
`;

const AppointmentTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #1f3e72;
`;

const AppointmentDetail = styled.p`
  font-size: 1rem;
  margin-bottom: 8px;
  color: #333;
`;

const Form = styled.form`
  width: 45%;
  background: #e0e0e0;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 10px 10px 20px #c8cbcd, -10px -10px 20px rgba(255, 255, 255, 0.75);
  max-width: 600px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
    padding: 1rem;
  }
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
    date: "",
    time: "",
    title: "",
    notes: "",
  });

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: "2025-04-01",
      time: "10:00 AM",
      title: "Doctor's Appointment",
    },
    {
      id: 2,
      date: "2025-04-05",
      time: "2:00 PM",
      title: "Parent-Teacher Meeting",
    },
    {
      id: 3,
      date: "2025-04-10",
      time: "1:00 PM",
      title: "Therapy Session",
    },
  ]);

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
      date: "",
      time: "",
      title: "",
      notes: "",
    });
  };

  return (
    <Container>
      {/* Upcoming Appointments Section */}
      <AppointmentsDetails>
        <SectionTitle>Upcoming Appointments</SectionTitle>
        {appointments.map((appointment) => (
          <AppointmentCard key={appointment.id}>
            <AppointmentTitle>{appointment.title}</AppointmentTitle>
            <AppointmentDetail>{appointment.date}</AppointmentDetail>
            <AppointmentDetail>{appointment.time}</AppointmentDetail>
          </AppointmentCard>
        ))}
      </AppointmentsDetails>

      {/* Appointment Form Section */}
      <Form onSubmit={handleSubmit}>
        {/* "Make Appointments" title now placed above the form */}
        <SectionTitle>Make Appointments</SectionTitle>

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
