import React from 'react';
import './car-steps.scss';
import FormGroup from '../../../../components/Shared/FormControls/Formgroup/FormGroup';
import { inputs } from './constants';

const Steps = () => (
  <section className="steps flex">
    <div className="container thick-border mx-auto py-4">
      <div className="w-full text-center">
        <h4 className="text-xl font-normal">Want to compare Car Insurance Quotes</h4>
        <p className="font-light">Use any of these 3 easy methods to get a Car Insurance Quote</p>
      </div>
      <div className="w-full py-12 sm:flex-no-wrap flex-wrap flex justify-center">
        <div className="steps-div">
          <div className="mb-10">
            <h4 className="text-lg font-normal">Leave your details</h4>
            <p className="font-light">and we'll call you back</p>
          </div>
          <div>
            <FormGroup inputs={inputs} actionText="Call me" />
          </div>
        </div>
        <div className="steps-div">
          <div className="mb-10">
            <h4 className="text-lg font-normal">Call us now</h4>
            <p className="font-light">and get your obligation free car insurance quote</p>
          </div>
          <p className="font-medium text-xl">0800 000 0000</p>
        </div>
        <div className="steps-div">
          <div className="mb-10">
            <h4 className="text-lg font-normal">Get quote online</h4>
            <p className="font-light">for your car and be at rest</p>
          </div>
          <button className="btn bg-primary">Start</button>
        </div>
      </div>
    </div>

  </section>
);

export default Steps;