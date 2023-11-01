import React from 'react'
import SelectPaymentstyle from './SelectPaymentstyle.css'

function SelectPayment() {
  return (
    <div>
      <div>
        <form className='formstyle'>
          <div className='Total'>Total ₹</div>
          <div className='Cash'><input type='radio' name='Cash On Delivery'/>Cash On Delivery</div>
         <div className='Card'><input type='radio' name='Credit Card / Debit Card'/>Credit Card / Debit Card</div>
         <div className='continuediv'> <button className='continuebutton' >Continue</button></div>
        </form>
      </div>
    </div>
  )
}

export default SelectPayment
