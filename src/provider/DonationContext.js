import React, {useState, createContext} from 'react';

const defaultData = {
  donated: 0,
  donors: 0,
}

export const DonationContext = createContext(defaultData);

export const DonationProvider = ({ children }) => {
  const [donated, setDonated] = useState(defaultData.donated);
  const [donors, setDonors] = useState(defaultData.donors);

  return (
    <DonationContext.Provider value={{ donated, setDonated, donors, setDonors }}>
      {children}  
    </DonationContext.Provider>
  )

}