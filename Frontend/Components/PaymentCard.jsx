import React from 'react'

const PaymentCard = () => {
  return (
    <div>
      <p>Card details</p>
      <input type="text" placeholder='card number'/> 
      <p>CardHolder Name</p>
      <input type="text" placeholder='john doe'/> 
      <p>Zip Postalcode</p>
      <input type="text" placeholder='445535'/>
    </div>
  )
}

export default PaymentCard
