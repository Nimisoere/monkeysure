import React from 'react';
import CarBanner from './CarMainBanner';
import Brands from './Brands';
import Steps from './Steps';
import Guide from './Guide';


const CarInsurance = ({ compare }) => (
  <div className="car-insurance">
    <CarBanner compare={compare} />
    {
      !compare && <>
        <Brands />
        <Steps />
        <Guide />
      </>
    }
  </div>
);

export default CarInsurance;