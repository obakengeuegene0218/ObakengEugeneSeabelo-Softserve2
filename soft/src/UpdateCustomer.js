import React from 'react';


const UpdateCustomer =({match})=>{
const customerId = match.params.customerId;

return(
    <div>
        <h2>Update Customer</h2>
        <p>Editing Customer ID {customerId}</p>
    </div>
)
}