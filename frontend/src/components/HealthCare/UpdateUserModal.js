import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../css/modal.css';


const UpdateProfileModal = ({ isOpen, onRequestClose, onUpdateProfile }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setcontact] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile({ name, email, contact ,address });
    onRequestClose();
  };

  const customModalStyles = {
    
    content: {
      backgroundColor: '#c8c8c8',
      padding: '20px',
      borderRadius: '10px',
      width: '700px',
      border: NamedNodeMap,
      maxWidth: '100%',
      height: '500px',
      margin: 'auto',
      zIndex: 1050,
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 10, 
    },

  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Update Profile" style={customModalStyles}>
      
      <form onSubmit={handleSubmit}>
      <div class="segment">
      <h2>Update Profile</h2>
        </div>

        <div className="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>

      <div className="form-group">
        <label for="contact">Contact</label>
        <input type="number" id="contact" value={contact} onChange={(e) => setcontact(e.target.value)} required />
      </div>

      <div className="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
      </div>

      <div className="form-group">
        <label for="address">Address</label>
        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </div>

      <div className="form-buttons">
        <button type="submit" className="submit-btn">Submit</button>
        <button type="button" class="cancel-btn" onClick={onRequestClose}>Cancel</button>
      </div>
      </form>
    </Modal>
  );
};

export default UpdateProfileModal;