import React from 'react';
import './customer-card.scss';
import editIcon from '../../../assets/images/edit.png';
import { Link } from 'react-router-dom';

const CustomerCard = ({ customerDetails={}, category, children }) => (
  <div className="customer-card">
    <Link to={children ? `/${category}` : `/${category}/insurance-form`} className="edit-icon">
      <img src={editIcon} alt="" />
    </Link>
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