import React from 'react';
import './brands.scss';

import logo1 from '../../../../assets/images/wapic.png';
import logo2 from '../../../../assets/images/axa-mansard.png';
import logo3 from '../../../../assets/images/lead-way.png';
import logo4 from '../../../../assets/images/oldMutual.png';
import logo5 from '../../../../assets/images/CHI-logo.png';
import Carousel from '../../../../components/Shared/Carousel';

const Brands = () => (
  <section className="brands flex">
    <div className="container mx-auto py-10 flex items-center justify-between">
      <div className="w-full text-center">
        <h4 className="text-lg font-normal">Compare these car insurance brands side by side</h4>
        <div className="w-full items-center justify-center py-8">
          <Carousel
            settings={{
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 5,
              variableWidth: true,
            }}
          >
            <div className="brands-logo-wrapper">
              <img className="brands-logo h-8" src={logo1} alt="logo" />
            </div>
            <div className="brands-logo-wrapper">
              <img className="brands-logo  h-8" src={logo2} alt="logo" />
            </div>
            <div className="brands-logo-wrapper">
              <img className="brands-logo  h-8" src={logo3} alt="logo" />
            </div>
            <div className="brands-logo-wrapper">
              <img className="brands-logo  h-8" src={logo4} alt="logo" />
            </div>
            <div className="brands-logo-wrapper">
              <img className="brands-logo  h-8" src={logo5} alt="logo" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
);

export default Brands;