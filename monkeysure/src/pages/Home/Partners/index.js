import React from 'react';
import './partners.scss';

import logo1 from '../../../assets/images/wapic.png';
import logo2 from '../../../assets/images/axa-mansard.png';
import logo3 from '../../../assets/images/lead-way.png';
import logo4 from '../../../assets/images/oldMutual.png';
import logo5 from '../../../assets/images/CHI-logo.png';
import logo6 from '../../../assets/images/custodian.png';
import logo7 from '../../../assets/images/hygeia.svg';
import logo8 from '../../../assets/images/royal-exchange.png';
import logo9 from '../../../assets/images/AIICO_Logo.jpg';
import logo10 from '../../../assets/images/cornerstone.jpeg';
import logo11 from '../../../assets/images/reliance-hmo.svg';
import logo12 from '../../../assets/images/fbnInsurance.jpeg';

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
              slidesToShow: 1,
              slidesToScroll: 5,
              variableWidth: true,
            }}
          >
            <div className="partner-logo-wrapper animate__animated animate__fadeIn">
              <img className="partner-logo h-8" src={logo1} alt="logo" />
            </div>
            <div className="partner-logo-wrapper animate__animated animate__fadeIn">
              <img className="partner-logo  h-8" src={logo2} alt="logo" />
            </div>
            <div className="partner-logo-wrapper animate__animated animate__fadeIn">
              <img className="partner-logo  h-8" src={logo3} alt="logo" />
            </div>
            <div className="partner-logo-wrapper animate__animated animate__fadeIn">
              <img className="partner-logo  h-8" src={logo4} alt="logo" />
            </div>
            <div className="partner-logo-wrapper animate__animated animate__fadeIn">
              <img className="partner-logo  h-8" src={logo5} alt="logo" />
            </div>
            <div className="partner-logo-wrapper  animate__animated animate__fadeIn">
              <img className="partner-logo h-8" src={logo6} alt="logo" />
            </div>
            <div className="partner-logo-wrapper animate__animated animate__fadeIn">
              <img className="partner-logo  h-8" src={logo7} alt="logo" />
            </div>
            <div className="partner-logo-wrapper animate__animated animate__fadeIn">
              <img className="partner-logo  h-8" src={logo8} alt="logo" />
            </div>
            <div className="partner-logo-wrapper animate__animated animate__fadeIn">
              <img className="partner-logo  h-8" src={logo9} alt="logo" />
            </div>
            <div className="partner-logo-wrapper animate__animated animate__fadeIn">
              <img className="partner-logo  h-8" src={logo10} alt="logo" />
            </div>
            <div className="partner-logo-wrapper animate__animated animate__fadeIn">
              <img className="partner-logo  h-8" src={logo11} alt="logo" />
            </div>
            <div className="partner-logo-wrapper animate__animated animate__fadeIn">
              <img className="partner-logo  h-8" src={logo12} alt="logo" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
);

export default Partners;