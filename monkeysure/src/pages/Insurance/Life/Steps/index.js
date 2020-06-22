import React from 'react';
import './steps.scss';

const Steps = () => (
  <section className="life-steps flex">
    <div className="container thick-border mx-auto py-4">
      <div className="w-full text-center">
        <h4 className="text-xl font-normal">Why do you need Life Insurance</h4>
        <p className="font-light">There and more are the benefits you stand to gain from a life insurance cover</p>
      </div>
      <div className="w-full py-8 flex justify-center">
        <div className="steps-div">
          <div className="">
            <h4 className="text-lg font-normal"> Funeral Cover for Parents</h4>
            <p className="font-light">Funeral Cover for parents allows those taking care of their parents financialy to add them to their existing or new Funeral Cover policy.When one or both of your parents pass away,a lump sum will be paid out.</p>
          </div>
        </div>
        <div className="steps-div">
          <div className="">
            <h4 className="text-lg font-normal"> Funeral Cover for Over 70's</h4>
            <p className="font-light">Funeral Cover for over the age of 80 allows you to prepare financialy for the costs involved in arranging a funeral if you have not done so yet, without a medical test.</p>
          </div>
        </div>
        <div className="steps-div">
          <div className="">
            <h4 className="text-lg font-normal"> Funeral Cover for Extended Family</h4>
            <p className="font-light">This type of Funeral Cover plan covers the funeral costs of an extended family member to relieve the financial burden from your family.A lump sum will be paid out upon oficial proof of death.</p>
          </div>
        </div>
      </div>
      <div className="flex mb-8 justify-center">
        <button className="btn bg-primary">
          Get a Quote
        </button>
      </div>
    </div>

  </section>
);

export default Steps;