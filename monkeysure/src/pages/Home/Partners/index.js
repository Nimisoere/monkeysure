import React from 'react';
import './partners.scss';

import logo1 from '../../../assets/images/wapic.png';
import logo2 from '../../../assets/images/axa-mansard.png';
import logo3 from '../../../assets/images/interswitchngnew.png';
import logo4 from '../../../assets/images/oldMutual.png';
import logo5 from '../../../assets/images/wakanow.png';
import Carousel from '../../../components/Shared/Carousel';

const Partners = () => (
  <section className="partner flex">
    <div className="container mx-auto py-10 flex items-center justify-between">
      <div className="w-full text-center">
        <h4 className="text-lg font-medium">Meet Our Trusted Partners</h4>
        <p>Monkeysure works with leading companies, locally and globally to give you the best cover</p>
        <div className="w-full py-8">
          <Carousel
            settings={{
              arrows: false,
              slidesToShow: 3,
              slidesToScroll: 1,
              variableWidth: true,
            }}
          >
            <div className="partner-logo-wrapper">
              <img className="partner-logo h-8" src={logo1} alt="logo" />
            </div>
            <div className="partner-logo-wrapper">
              <img className="partner-logo  h-8" src={logo2} alt="logo" />
            </div>
            <div className="partner-logo-wrapper">
              <img className="partner-logo  h-8" src={logo3} alt="logo" />
            </div>
            <div className="partner-logo-wrapper">
              <img className="partner-logo  h-8" src={logo4} alt="logo" />
            </div>
            <div className="partner-logo-wrapper">
              <img className="partner-logo  h-8" src={logo5} alt="logo" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
);

export default Partners;