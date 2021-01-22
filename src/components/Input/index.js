import React from 'react';
import './index.css';

const Input = ({onClick}) => {
  const handleSubmit = (e) => {
    // Update donationAmount state
    const donationAmount = parseInt(e.target.donated.value);

    if (!isNaN(donationAmount)) {
      onClick(donationAmount)

      // Display success validation

    } else {
      // Display error validation
      
    }

    // Reset form
    e.target.reset()
    e.preventDefault();
  }

  return (
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
  )
}

export default Input;
