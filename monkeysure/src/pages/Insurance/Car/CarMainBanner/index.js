import React from 'react';
import './car-insurance.scss';
import { inputs } from './constants';

import carBackground from '../../../../assets/images/mercedes.png';
import FormGroup from '../../../../components/Shared/FormControls/Formgroup/FormGroup';

const CarBanner = () => (
  <section className="car-banner flex">
    <div className="container mx-auto py-20 flex items-center justify-between">
      <div className=" self-start">
        <div className="banner-text">
          <p className="font-light text-5xl color-primary">Car insurance quotes</p>
          <p className="font-light text-5xl">in 2 simple steps</p>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <img src={carBackground} className="h-48" alt="car" />
      </div>
    </div>
    <div className="car-widget">
      <h4 className="mb-4 text-lg font-light">Search below for Auto Insurance Quote</h4>
      <FormGroup inputs={inputs} actionText="Subscribe" />
    </div>
  </section>
);

export default CarBanner;