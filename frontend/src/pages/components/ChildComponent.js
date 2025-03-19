import React from "react";
import styled from "styled-components";

const AddChildContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Center content */
  border-radius: 8px;
  background: #e0e0e0;
  box-shadow: 5px 5px 10px #aaaaaa, -5px -5px 10px #ffffff;
  padding: 1rem;
  margin: 1rem auto;
  width: 50%;
  max-width: 800px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%; 
    margin: 0;
    padding: 2rem;
  }
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  border-radius: 15px;
  margin-right: 1rem;
  border: 8px solid #1d2636;

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  width: 60%;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #007bff;
`;

const Description = styled.p`
  margin: 0.5rem 0 1rem;
  color: #555;
  font-weight: 500;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 10px;
  background: rgb(54, 211, 119);
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.5s ease-in;
  margin-top: 1rem;

  &:hover {
    transform: scale(1.1);
  }
`;

const AddChildButton = () => {
  const handleAddChild = () => {
    // Navigate to the registration page
  };

  return (
    <AddChildContainer>
      <Image src="./images/reg.jpg" alt="Community" />
      <TextContainer>
        <Title>Add Your Child</Title>
        <Description>
          Registering your child into our system offers many benefits such as
          personalized resources, access to special programs, and regular
          updates about their development.
        </Description>
        <Button onClick={handleAddChild}>Register Now</Button>
      </TextContainer>
    </AddChildContainer>
  );
};

export default AddChildButton;
