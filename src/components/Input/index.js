import React from 'react';
import './index.css';

const Input = () => {
  return (
    <div className="input-container">
      <div className="dollar-icon-container">
        <span className="dollar-icon font-ibm-plex">$</span>
      </div>
      <input type="number" className="input-field font-ibm-plex font-bold" placeholder="50"/>
      <button type="submit" className="submit font-ibm-plex font-bold">Give Now</button>
    </div>
  )
}

export default Input;
