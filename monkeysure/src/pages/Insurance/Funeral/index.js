import React from 'react';
import FuneralBanner from './FuneralMainBanner';
import Brands from './FuneralBrands';
import Steps from './FuneralSteps';
import Guide from './Guide';


const FuneralInsurance = ({ compare }) => (
  <div className="funeral-insurance">
    <FuneralBanner compare={compare} />
    {
      !compare && <>
        <Brands />
        <Steps />
        <Guide />
      </>
    }
  </div>
);

export default FuneralInsurance;