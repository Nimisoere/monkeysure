import React from 'react';
import './assistance.scss';
import phone from '../../assets/images/phone.png';

const Assistance = () => (
  <div className="assistance py-8">
    <div className="mb-4 w-full text-center">
      <h4 className="text-xl font-medium">Need assistance finding the right quote?</h4>
      <p className="text-base font-light">Please not that quoted prices are subject to change if you don't buy now</p>
      <p className="text-base font-light">Kindly call out service agent to get the best deal for you</p>
    </div>
    <button className="btn border-primary"><img src={phone} alt="" className="mr-2" /> Call us now</button>
  </div>
);

export default Assistance;