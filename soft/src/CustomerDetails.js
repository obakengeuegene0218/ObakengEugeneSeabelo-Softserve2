  import React from "react";

const  CustomerDetails =({match})=>{
  const CustomerId = match.params.customerId;



  return(
    <div>

      <h2>Customer Details</h2>
      <p>Customer Id{CustomerId}</p>
    </div>
  )
}

export default CustomerDetails;