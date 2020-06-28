import React from 'react';
import MainBanner from './MainBanner';
import Brands from './Brands';
import Steps from './Steps';
import Guide from './Guide';


const LifeInsurance = ({ compare }) => (
  <div className="life-insurance">
   <MainBanner compare={compare} />
   {
      !compare && <>
        <Brands />
        <Steps />
        <Guide />
      </>
    }
  </div>
);

export default LifeInsurance;