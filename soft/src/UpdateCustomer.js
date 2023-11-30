// UpdateCustomer.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateCustomer = ({ match }) => {
  const customerId = match.params.customerId;
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    // Fetch customer details when the component mounts
    axios.get(`http://localhost:5000/api/customer/${customerId}`)
      .then(response => setCustomer(response.data))
      .catch(error => console.error('Error fetching customer details:', error));
  }, [customerId]);

  const handleUpdateCustomer = () => {
    // Send a PUT request to update the customer
    axios.put(`http://localhost:5000/api/customer/${customerId}`, customer)
      .then(response => console.log('Customer updated:', response.data))
      .catch(error => console.error('Error updating customer:', error));
  };

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Update Customer</h2>
      <p>Customer ID: {customer.customerID}</p>
      
      <button type="button" onClick={handleUpdateCustomer}>Update Customer</button>
    </div>
  );
};

export default UpdateCustomer;
