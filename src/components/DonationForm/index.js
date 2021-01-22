import React, { useState }  from 'react';
import './index.css';

import { DONATION_GOAL } from '../../utils/constants';
import { numberWithCommas } from '../../utils/index';

import DonationCard from '../DonationCard';
import TextBubble from '../TextBubble';

const DonationForm = () => {
  const [donated, setDonated] = useState(0);
  const [donors, setDonors] = useState(0);

  const isDonationGoalReached = donated >= DONATION_GOAL;
  const donationsNeeded = isDonationGoalReached ? 0 : DONATION_GOAL - donated;
  const progress = isDonationGoalReached ? 100 : (donated / DONATION_GOAL) * 100;

  const message = (
    isDonationGoalReached ? (
      <p className="message font-ibm-plex font-bold">
        Our donation goal of <span className="dollar">{numberWithCommas(DONATION_GOAL)}</span> has been reached!
      </p>
    ) : (
      <p className="message font-ibm-plex">
        <span className="font-bold dollar">{numberWithCommas(donationsNeeded)}</span> still needed to fund this project
      </p>
    )
  );

  return (
    <div className="donation-container">
      <TextBubble message={message} />
      <DonationCard
        donors={donors}
        setDonors={setDonors}
        setDonated={setDonated}
        progress={progress}  
      />
    </div>
  )
}

export default DonationForm;
