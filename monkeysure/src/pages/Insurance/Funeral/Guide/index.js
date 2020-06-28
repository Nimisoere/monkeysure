import React from 'react';
import './guide.scss';

const Guide = () => (
  <section className="funeral-guide mb-12 flex">
    <div className="container thick-border mx-auto py-4">
      <div className="w-full text-center">
        <h4 className="text-xl font-normal">All you need to know about funeral cover</h4>
        <p className="font-light">Research based answers to those very important questions</p>
      </div>
      <div>
        <div className="guide-row">
          <div className="guide-div">
            <h4 className="text-lg font-normal">Funeral cover FAQs</h4>
            <p className="font-light">We've put together a comprehensive list of FAQ's to help you find out more about Funeral Cover so that you can make more of an informed decision on finding the right cover to suit you and your family’s specific need</p>
            <button className="mt-4 btn border-secondary">
              View FAQs
            </button>
          </div>
          <div className="guide-div">
            <h4 className="text-lg font-normal">Funeral cover glossary</h4>
            <p className="font-light">Read more about Funeral Insurance and some of the day-to-day terms used within the Funeral Insurance industry to help you on your way to finding the right Funeral Cover.</p>
            <button className="mt-4 btn border-secondary">
              View glossary
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Guide;