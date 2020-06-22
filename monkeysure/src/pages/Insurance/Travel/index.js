import React from 'react';
import CarBanner from './CarMainBanner';
import Brands from './Brands';
import Steps from './Steps';
import Guide from './Guide';


const CarInsurance = () => (
  <div className="car-insurance">
   <CarBanner />
   <Brands />
   <Steps />
   <Guide />
  </div>
);

export default CarInsurance;