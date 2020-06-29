import React from 'react';
import './banner.scss';
import Carousel from '../../../components/Shared/Carousel';

import carBackground from '../../../assets/images/Background copy 10.png';
import shield from '../../../assets/images/shield.png';
import wallet from '../../../assets/images/wallet.png';
import thumbs from '../../../assets/images/thumbs-up.png';

const ValueProposition = () => (
  <section className="value-props flex">
    <div className="container mx-auto py-4 flex flex-wrap items-center justify-start">
      <div className="sm:w-5/12 w-full">
        <img src={carBackground} alt="car" />
      </div>
      <div className="sm:w-7/12 w-full flex flex-wrap sm:justify-start justify-center">
        <div className="sm:text-left text-center">
          <h4 className="text-xl font-normal">Why Choose Monkeysure!</h4>
          <p>We save you time and money, with the best quotes and a robust range of insurers to select from</p>
        </div>
        <div className="py-6 flex sm:justify-start justify-center w-full">
          <Carousel
            settings={{
              dots: false,
              slidesToShow: 3,
              slidesToScroll: 1,
              centered: true,
              variableWidth: true,
            }}
          >
            <div className="mr-6">
              <div className="icons mb-5">
                <img className="h-8" src={wallet} alt="wallet" />
              </div>
            Money Saving
            </div>
            <div className="mr-6">
              <div className="icons mb-5">
                <img className="h-8" src={thumbs} alt="thumbs" />
              </div>
              Quick &amp; Easy
            </div>
            <div className="mr-6">
              <div className="icons mb-5">
                <img className="h-8" src={shield} alt="wallet" />
              </div>
              Trustworthy
            </div>
          </Carousel>

        </div>
      </div>
    </div>
  </section>
);

export default ValueProposition;