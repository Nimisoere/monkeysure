import React from 'react';
import './phone-insurance.scss';
import { inputs } from './constants';

import lifeBackground from '../../../../assets/images/life-banner.png';
import FormGroup from '../../../../components/Shared/FormControls/Formgroup/FormGroup';

const PhoneBanner = () => (
  <section className="phone-banner flex">
    <div className="container mx-auto py-20 pb-0 flex items-center justify-between">
      <div className=" self-start">
        <div className="banner-text">
          <p className="font-light text-5xl color-primary">Phone insurance</p>
          <p className="font-light text-5xl">easy as you like</p>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <img src={lifeBackground} className="h-64" alt="car" />
      </div>
    </div>
    <div className="phone-widget">
      <h4 className="mb-4 text-lg font-light">Get your free device Insurance Quote</h4>
      <div className="max-w-xl">
        <FormGroup inputs={inputs} actionText="Search" />
      </div>
    </div>
  </section>
);

export default PhoneBanner;