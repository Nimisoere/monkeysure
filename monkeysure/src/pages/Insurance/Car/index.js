import React from 'react';
import CarBanner from './CarMainBanner';
import Brands from './Brands';
import Steps from './Steps';


const CarInsurance = () => (
  <div className="car-insurance">
   <CarBanner />
   <Brands />
   <Steps />
  </div>
);

export default CarInsurance;