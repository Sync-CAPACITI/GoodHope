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

const UpdateSpecialNeedsForm = ({ initialData }) => {

};

export default UpdateSpecialNeedsForm;
