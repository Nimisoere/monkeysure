import React from 'react';
import './funeral-steps.scss';

const Steps = () => (
  <section className="funeral-steps flex">
    <div className="container thick-border mx-auto py-4">
      <div className="w-full text-center">
        <h4 className="text-xl font-normal">A quick guide to funeral insurance</h4>
        <p className="font-light">Before you proceed, the folowing info that help make an informed decision.</p>
      </div>
      <div className="w-full py-12 flex justify-center">
        <div className="steps-div">
          <div className="mb-10">
            <h4 className="text-lg font-normal"> Funeral Cover for Parents</h4>
            <p className="font-light">Funeral Cover for parents allows those taking care of their parents financialy to add them to their existing or new Funeral Cover policy.When one or both of your parents pass away,a lump sum will be paid out.</p>
            <button className="btn mt-6 border-secondary">
              Know more
            </button>
          </div>
        </div>
        <div className="steps-div">
          <div className="mb-10">
            <h4 className="text-lg font-normal"> Funeral Cover for Over 70's</h4>
            <p className="font-light">Funeral Cover for over the age of 80 allows you to prepare financialy for the costs involved in arranging a funeral if you have not done so yet, without a medical test.</p>
            <button className="btn mt-6 border-secondary">
              Know more
            </button>
          </div>
        </div>
        <div className="steps-div">
          <div className="mb-10">
            <h4 className="text-lg font-normal"> Funeral Cover for Extended Family</h4>
            <p className="font-light">This type of Funeral Cover plan covers the funeral costs of an extended family member to relieve the financial burden from your family.A lump sum will be paid out upon oficial proof of death.</p>
            <button className="btn mt-6 border-secondary">
              Know more
            </button>
          </div>
        </div>
      </div>
    </div>

  </section>
);

export default Steps;