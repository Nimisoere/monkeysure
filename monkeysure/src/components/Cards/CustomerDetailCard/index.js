import React from 'react';
import './customer-card.scss';
import editIcon from '../../../assets/images/edit.png'
const CustomerCard = ({ customerDetails={}, children }) => (
  <div className="customer-card">
    <div className="edit-icon">
      <img src={editIcon} alt="" />
    </div>
    {
      children ? children : <div>
        <div className="mb-3">
          <h4 className="text-base">{customerDetails.name}</h4>
          <p>{customerDetails.email}</p>
          <p>{customerDetails.phone}</p>
        </div>
        <div className="mb-3">
          <h4 className="font-normal">Address</h4>
          <p>{customerDetails.address}</p>
        </div>
        <div className="mb-3">
          <h4 className="font-normal">Date of birth</h4>
          <p>{customerDetails.dob}</p>
        </div>
      </div>
    }
  </div>
)

export default CustomerCard;