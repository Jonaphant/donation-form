import React, { useState } from 'react';
import './index.css';

import { numberWithCommas } from '../../utils/index';
import { MIN_DONATION } from '../../utils/constants';
import ValidationMessage from '../ValidationMessage';

const Input = ({ onClick }) => {
  const [validationData, setValidationData] = useState({});
  const [showValidation, setShowValidation] = useState(false);
  const [timer, setTimer] = useState(null);

  const startTimer = (callback, time) => {
    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        callback()
      }, time)
    )
  }

  const handleSubmit = (e) => {
    // Update donationAmount state
    const donationAmount = parseInt(e.target.donated.value);

    if (isNaN(donationAmount)) {
      // Display error validation
      setValidationData({ message: `Please enter a number`, type: 'error' })
      setShowValidation(true);
      startTimer(() => {
        setShowValidation(false)
      }, 3000);
    } else {

      if (donationAmount >= MIN_DONATION) {
        onClick(donationAmount)

        // Display success validation
        const formattedAmount = numberWithCommas(donationAmount)
        setValidationData({
          message: `Thanks for donating $${formattedAmount}!`,
          type: 'success'
        });
        setShowValidation(true);
        startTimer(() => setShowValidation(false), 3000);
      } else {
        // Display error validation
        setValidationData({ message: `Donations must be $${numberWithCommas(MIN_DONATION)} or more`, type: 'error' })
        setShowValidation(true);
        startTimer(() => setShowValidation(false), 3000);
      }
    }

    // Reset form
    e.target.reset()
    e.preventDefault();
  }

  return (
    <>
      <form className="input-container" onSubmit={handleSubmit}>
        <div className="dollar-icon-container">
          <span className="dollar-icon font-ibm-plex">$</span>
        </div>
        <input
          type="number"
          name="donated"
          id="input-field"
          className="font-ibm-plex font-bold"
          placeholder="50" 
        />
        {/* Hidden label for accessibility/screen readers */}
        <label htmlFor="input-field" id="input-field-label">Donate</label>
        <button
          type="submit"
          className="submit font-ibm-plex font-bold"
        >
          Give Now
        </button>
      </form>
      {showValidation && (
        <>
          <br/>
          <ValidationMessage
            message={validationData.message}
            type={validationData.type}  
          />
        </>
      )}
    </>
  )
}

export default Input;
