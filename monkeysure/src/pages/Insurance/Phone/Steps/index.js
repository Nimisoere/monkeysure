import React from 'react';
import './steps.scss';
import iphone from '../../../../assets/images/iphone.png';

const Steps = () => (
  <section className="phone-steps flex">
    <div className="container thick-border mx-auto py-4">
      <div className="w-full text-center">
        <h4 className="text-xl font-normal">Why do you need Device Insurance</h4>
        <p className="font-light">Considering how much it costs to get your gadget, not insuring it could be costly</p>
      </div>
      <div className="w-full py-6 flex justify-center">
        <img src={iphone} alt="iphone" className="h-48" />
        <div className="flex flex-col justify-center">
          <div className="flex mb-6">
            <div className="steps-div">
              <div className="mb-6">
                <h4 className="text-lg font-normal">Device Repair</h4>
                <p className="font-light">Insurance covers repair in the case of damge to device</p>
              </div>
            </div>
            <div className="steps-div">
              <div className="mb-6">
                <h4 className="text-lg font-normal">Device replacement</h4>
                <p className="font-light">Be at rest, your devicce can be replace if lost or stolen</p>
              </div>
            </div>
          </div>
          <div className="px-12">
            <button className="btn bg-primary">Get a quote</button>
          </div>
        </div>
      </div>

    </div>

  </section>
);

export default Steps;