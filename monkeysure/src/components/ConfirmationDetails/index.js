import React from 'react';
import './confirmation-details.scss';

const ConfirmationDetails = () => (
  <div className="confirmation-details">
    <div className="container mx-auto details-container">
      <div className="flex justify-center">
        <div className="detail">
          <h4 className="text-xl font-light">John Smith</h4>
          <p>johnsmith@mail.com</p>
          <p>08000000000</p>
        </div>
        <div className="detail">
          <h4 className="text-xl font-light">Home Insurance Policy</h4>
          <p>Lorem Ipsum</p>
          <p>Dolor sit amet</p>
        </div>
        <div className="detail">
          <h4 className="text-xl font-light">Comprehensive Insurance</h4>
          <p>Plan starts: 00/00/00</p>
          <p>Plan starts: 00/00/00</p>
        </div>
      </div>
    </div>
  </div>
)

export default ConfirmationDetails;