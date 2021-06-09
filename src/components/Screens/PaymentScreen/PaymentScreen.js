import React, { useState } from 'react';
import './PaymentScreen.css';
import { useDispatch } from 'react-redux';
import { savePayment } from '../../../actions/cartActions';
import CheckoutSteps from '../../CheckoutSteps/CheckoutSteps';

function PaymentScreen(props) {

  const [paymentMethod, setPaymentMethod] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push('/placeorder');
  }

  return (
    <div>
      <CheckoutSteps step1 step2 step3 />
      <div className="form">
        <form onSubmit={submitHandler} >
          <ul className="form-container">
            <li>
              <h2>Payment</h2>
            </li>

            <li> 
              <div className="payment-options">
                <input type="radio" name="paymentMethod" id="paymentMethod" value="payment" onChange={(e) => setPaymentMethod(e.target.value)}>
                </input>
                <label htmlFor="paymentMethod">
                  Paypal
                </label>
                <br></br>
                <br></br>
                <input type="radio" name="paymentMethod" id="paymentMethod" value="payment" onChange={(e) => setPaymentMethod(e.target.value)}>
                </input>
                <label htmlFor="paymentMethod">
                  Credit Card
                </label>
              </div>
            </li>

            <li>
              <button type="submit" className="button primary">Continue</button>
            </li>

          </ul>
        </form>
      </div>
    </div>
  )
}
export default PaymentScreen;