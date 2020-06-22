import React from 'react';
import FuneralBanner from './FuneralMainBanner';
import Brands from './FuneralBrands';
import Steps from './FuneralSteps';
import Guide from './Guide';


const FuneralInsurance = () => (
  <div className="funeral-insurance">
   <FuneralBanner />
   <Brands />
   <Steps />
   <Guide />
  </div>
);

export default FuneralInsurance;