import React from 'react';
import './index.css';

import TextBubble from '../TextBubble';
import ProgressBar from './ProgressBar';

const DonationForm = () => {
  return (
    <div>
      <TextBubble />
      <ProgressBar />
      <div className="donation-card">
        <p className="font-bold font-poppins donation-header">Only four days left to fund this project</p>
        <p className="font-ibm-plex">Join the <span className="font-bold">11</span> other donors who have already supported this project.</p>
        {/* input form */}
      </div>
    </div>
  )
}

export default DonationForm;
