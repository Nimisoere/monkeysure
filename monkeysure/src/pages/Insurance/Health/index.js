import React from 'react';
import Banner from './MainBanner';
import Brands from './Brands';
import Steps from './Steps';
import Guide from './Guide';


const HealthInsurance = ({ compare }) => (
  <div className="health-insurance">
    <Banner compare={compare} />
    {
      !compare && <>
        <Brands />
        <Steps />
        <Guide />
      </>
    }
  </div>
);

export default HealthInsurance;