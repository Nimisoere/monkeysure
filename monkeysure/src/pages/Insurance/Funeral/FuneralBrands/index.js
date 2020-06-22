import React from 'react';
import './funeral-brands.scss';

import logo1 from '../../../../assets/images/wapic.png';
import logo2 from '../../../../assets/images/axa-mansard.png';
import logo3 from '../../../../assets/images/interswitchngnew.png';
import logo4 from '../../../../assets/images/oldMutual.png';
import logo5 from '../../../../assets/images/wakanow.png';

const FuneralBrands = () => (
  <section className="funeral-brands flex">
    <div className="container mx-auto py-10 flex items-center justify-between">
      <div className="w-full text-center">
        <h4 className="text-lg font-normal">Compare these funeral insurance brands side by side</h4>
        <div className="w-full flex items-center justify-center py-8">
          <div className="funeral-brands-logo-wrapper">
            <img className="funeral-brands-logo h-8" src={logo1} alt="logo" />
          </div>
          <div className="funeral-brands-logo-wrapper">
            <img className="funeral-brands-logo  h-8" src={logo2} alt="logo" />
          </div>
          <div className="funeral-brands-logo-wrapper">
            <img className="funeral-brands-logo  h-8" src={logo3} alt="logo" />
          </div>
          <div className="funeral-brands-logo-wrapper">
            <img className="funeral-brands-logo  h-8" src={logo4} alt="logo" />
          </div>
          <div className="funeral-brands-logo-wrapper">
            <img className="funeral-brands-logo  h-8" src={logo5} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FuneralBrands;