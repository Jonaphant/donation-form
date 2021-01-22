import React, { useContext } from 'react';
import './index.css';

import { DonationContext } from '../../provider/DonationContext';

import ProgressBar from './ProgressBar';
import Input from '../Input';

const DonationForm = () => {
  const { setDonated, donors, setDonors } = useContext(DonationContext);

  const handleDonationSubmit = (donationAmount) => {
    const parsedAmount = parseInt(donationAmount);

    if (!isNaN(parsedAmount)) {
      // Update donated state
      setDonated(prev => prev + parsedAmount);

      // Increment donor state
      setDonors(prev => prev + 1);
    }
  }

  return (
    <div>
      <ProgressBar />
      <div className="donation-card">
        <div>
          <p className="font-bold font-poppins donation-header">Only four days left to fund this project</p>
          <p className="font-ibm-plex sub-header">Join the <span className="font-bold">{donors}</span> other donors who have already supported this project.</p>
        </div>
        <Input onClick={handleDonationSubmit} />
      </div>
    </div>
  )
}

export default DonationForm;
