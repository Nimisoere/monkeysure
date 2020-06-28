import React from 'react';
import './guide.scss';

const Guide = () => (
  <section className="phone-guide mb-12 flex">
    <div className="container thick-border mx-auto py-4">
      <div className="w-full text-center">
        <h4 className="text-xl font-normal">Know more about Device Insurace</h4>
        <p className="font-light">Before you proceed, the following info can help make an informed decision</p>
      </div>
      <div>
        <div className="guide-row">
          <div className="guide-div">
            <h4 className="text-lg font-normal">What is Device Insurace</h4>
            <p className="font-light">Cellphone Insurance covers the policyholder in the event of theft, loss or damage of their cellphone. In any of these events, the cellphone will be replaced with a similar model, if not the same one. Depending on the insurance company, different policies offer different benefits and exclusions. It’s therefore important to ask all the relevant questions before signing up for Cellphone Insurance.</p>
          </div>
          <div className="guide-div">
            <h4 className="text-lg font-normal">How to claim insurace</h4>
            <p className="font-light">If your cellphone has been stolen or lost and you no longer have possession of it, the claim normally has to be preceded by blacklisting the phone with the relevant service provider. An ITC number will be issued to you to prove that it has been blacklisted, which you then need to provide to your insurance company as part of the claim. You may also need to report this to the police and they will then issue you with a case number.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="btn border-secondary">
          Get quote
        </button>
      </div>
    </div>
  </section>
);

export default Guide;