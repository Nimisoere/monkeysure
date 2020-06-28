import React from 'react';
import Banner from './MainBanner';
import Brands from './Brands';
import Steps from './Steps';
import Guide from './Guide';


const HomeInsurance = ({ compare }) => (
  <div className="home-insurance">
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

export default HomeInsurance;