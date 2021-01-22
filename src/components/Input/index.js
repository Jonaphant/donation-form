import React, { useState } from 'react';
import './index.css';

import ValidationMessage from '../ValidationMessage';

const Input = ({ onClick }) => {
  const [validationData, setValidationData] = useState({});
  const [showValidation, setShowValidation] = useState(false);

  const handleSubmit = (e) => {
    // Update donationAmount state
    const donationAmount = parseInt(e.target.donated.value);

    if (!isNaN(donationAmount)) {
      onClick(donationAmount)

      // Display success validation
      setValidationData({ message: `Thanks for donating $${donationAmount}!`, type: 'success' })
      setShowValidation(true);
      setTimeout(() => {
        setShowValidation(false);
      }, 3000)
    } else {
      // Display error validation
      setValidationData({ message: `Please enter digits`, type: 'error' })
      setShowValidation(true);
      setTimeout(() => {
        setShowValidation(false);
      }, 3000)
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
