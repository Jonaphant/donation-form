import React from 'react';
import './App.css';

import { DonationProvider } from './provider/DonationContext';

import DonationForm from './components/DonationForm';
import TextBubble from './components/TextBubble';

const App = () => {
  return (
    <div className="app-container">
      <div className="donation-container">
        <DonationProvider>
          <TextBubble />
          <DonationForm />
        </DonationProvider>
      </div>
    </div>
  )
}

export default App;