// CustomersList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CustomersList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch customer data when the component mounts
    axios.get('http://localhost:5000/api/customer')
      .then(response => setCustomers(response.data))
      .catch(error => console.error('Error fetching customers:', error));
  }, []);

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map(customer => (
          <li key={customer.customerID}>
            <Link to={`/details/${customer.customerID}`}>{customer.firstName} {customer.lastName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomersList;

