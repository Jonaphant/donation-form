import React from 'react';
import './index.css';

import ProgressBar from './ProgressBar';
import Input from '../Input';

const DonationCard = ({donors, setDonors, setDonated, progress}) => {

  const handleDonationSubmit = (donationAmount) => {
    // Update donated state
    setDonated(prev => prev + donationAmount);

    // Increment donor state
    setDonors(prev => prev + 1);
  }

  return (
    <div>
      <ProgressBar progress={progress} />
      <div className="donation-card">
        <div>
          <h1 className="font-bold font-poppins donation-header">Only four days left to fund this project</h1>
          <p className="font-ibm-plex sub-header">
            Join the <span className="font-bold">{donors}</span> other donors who have already supported this project.
          </p>
        </div>
        <Input onClick={handleDonationSubmit} />
      </div>
    </div>
  )
}

export default DonationCard;
