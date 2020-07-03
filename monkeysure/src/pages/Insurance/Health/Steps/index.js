import React from 'react';
import './steps.scss';

const Steps = () => (
  <section className="health-steps flex">
    <div className="container thick-border mx-auto py-4">
      <div className="w-full text-center">
        <h4 className="text-xl font-normal">Why do you need Health Insurance</h4>
        <p className="font-light">Stay healthy and worry free from health issues</p>
      </div>
      <div className="w-full sm:flex-no-wrap flex-wrap py-4 flex justify-center">
        <div className="steps-div">
          <div className="">
            <h4 className="text-lg font-normal">Emergency medical care</h4>
            <p className="font-light">In case of health emergency, rest assured of medicare care at no cost to you</p>
          </div>
        </div>
        <div className="steps-div">
          <div className="">
            <h4 className="text-lg font-normal">Ambulance service</h4>
            <p className="font-light">Insurance covers ambulance service in case of an emergency</p>
          </div>
        </div>
        <div className="steps-div">
          <div className="">
            <h4 className="text-lg font-normal">Oral and eye care</h4>
            <p className="font-light">Get cover for your eye care, glasses and ear care. Get access to top providers</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button className="btn bg-primary">Get a quote</button>
      </div>
    </div>

  </section>
);

export default Steps;