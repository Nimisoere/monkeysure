import React from 'react';
import CarBanner from './CarMainBanner';
import Brands from './Brands';
import Steps from './Steps';
import Guide from './Guide';


const HomeInsurance = () => (
  <div className="car-insurance">
   <CarBanner />
   <Brands />
   <Steps />
   <Guide />
  </div>
);

export default HomeInsurance;