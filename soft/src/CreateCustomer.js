// CreateCustomer.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateCustomer = () => {
  const [newCustomer, setNewCustomer] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    dateOfBirth: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleCreateCustomer = () => {
    // Send a POST request to create a new customer
    axios.post('http://localhost:5000/api/customer', newCustomer)
      .then(response => console.log('Customer created:', response.data))
      .catch(error => console.error('Error creating customer:', error));
  };

  return (
    <div>
      <h2>Create Customer</h2>
      <form>
      
        <label>First Name:
          <input type="text" name="firstName" onChange={handleInputChange} />
        </label>
      
        <button type="button" onClick={handleCreateCustomer}>Create Customer</button>
      </form>
    </div>
  );
};

export default CreateCustomer;
