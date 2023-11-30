 // CustomerDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerDetails = ({ match }) => {
  const customerId = match.params.customerId;
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    // Fetch customer details when the component mounts
    axios.get(`http://localhost:5000/api/customer/${customerId}`)
      .then(response => setCustomer(response.data))
      .catch(error => console.error('Error fetching customer details:', error));
  }, [customerId]);

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Customer Details</h2>
      {/* Display customer details */}
      <p>Customer ID: {customer.customerID}</p>
      <p>Name: {customer.firstName} {customer.lastName}</p>
      <p>Email: {customer.emailAddress}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CustomerDetails;
