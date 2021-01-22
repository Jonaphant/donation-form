import React from 'react';
import './index.css';

const Input = ({onClick}) => {
  const handleSubmit = (e) => {
    // Validation

    // Update donationAmount state
    const donationAmount = parseInt(e.target.donated.value);
    onClick(donationAmount)

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
        className="input-field font-ibm-plex font-bold"
        placeholder="50" 
      />
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
