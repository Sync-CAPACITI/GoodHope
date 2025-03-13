import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components as defined above...

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
    console.log('Form Data Submitted:', formData);
    // Add your form submission logic here
    setIsEditable(false); // Exit edit mode after submitting if needed
  };

  const handleReset = () => {
    setFormData(initialData); // Reset to initial data
  };

  const toggleEditMode = () => {
    setIsEditable(!isEditable);
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
          readOnly={!isEditable} // Make input read-only if not in edit mode
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
          readOnly={!isEditable}
        />

        <Label htmlFor="specialNeedsCategory">Special Needs Category</Label>
        <Select
          id="specialNeedsCategory"
          name="specialNeedsCategory"
          value={formData.specialNeedsCategory}
          onChange={handleChange}
          required
          disabled={!isEditable} // Disable selection if not editable
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
              required={formData.specialNeedsCategory === 'Other'}
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
            Edit
          </Button>
        )}
      </Form>
    </Container>
  );
};

// Default initial data (you can change or pass props based on parent component)
const initialData = {
  childName: 'John Doe',
  childAge: 10,
  specialNeedsCategory: 'Autism',
  otherNeeds: '',
  medicalHistory: 'No significant medical history.',
  medicalDocuments: null,
};

// Usage of SpecialNeedsForm component
const App = () => {
  return <SpecialNeedsForm initialData={initialData} />;
};

export default App;