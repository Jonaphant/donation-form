import React, { useContext } from 'react';
import './index.css';

import { DONATION_GOAL } from '../../utils/constants';
import { DonationContext } from '../../provider/DonationContext';

import ProgressBar from './ProgressBar';
import Input from '../Input';

const DonationForm = () => {
  const {
    donated,
    setDonated,
    donors,
    setDonors
  } = useContext(DonationContext);
  const progressValue = donated > DONATION_GOAL ? 100 : (donated / DONATION_GOAL) * 100;

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
      <ProgressBar progressValue={progressValue} />
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
