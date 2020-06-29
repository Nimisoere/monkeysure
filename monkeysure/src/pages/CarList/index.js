import React from 'react';
import PageHeader from '../../components/PageHeader';
import './car-list.scss';
import CustomerCard from '../../components/Cards/CustomerDetailCard';
import car from '../../assets/images/car-green.png';
import editIcon from '../../assets/images/edit.png';
import { Link } from 'react-router-dom';

const CarList = () => (
  <div className="car-list">
    <PageHeader leadtext="Car insurance quotes" subtext="in 2 simple steps" />
    <div className="container mx-auto py-8">
      <div>
        <h4 className="font-normal text-lg">Car Information</h4>
        <p className="text-base">Please fill out the form to get accurate quotes</p>
      </div>
      <div className="w-full mt-6 flex">
        <div className="w-9/12 pr-6">
          <div className="car-item">
            <div className="w-3/12 car-icon">
              <img src={car} alt="" />
            </div>
            <div className="w-9/12 car-details">
              <button className="edit-icon" >
                <img src={editIcon} alt="" />
              </button>
              <h4 className="text-lg font-normal">Honda Accord EX V6</h4>
              <p>2018 Model</p>
              <p><span className="font-normal">Parked In: </span> Secured Garage</p>
              <p><span className="font-normal">Cover Type: </span> Comprehensive</p>
            </div>
          </div>
          <div className="add-car-wrapper">
            <Link to="/cars" className="btn add-btn bg-primary mr-6">+</Link> Add another car
          </div>
          <Link to="/cars/listing" className="btn proceed-btn bg-primary">Confirm</Link>
        </div>
        <div className="w-3/12">
          <CustomerCard customerDetails={{
            name: 'John Smith',
            email: 'johnsmith@mail.com',
            phone: '0800 000 0000',
            address: '1, Streetname, Providence Street, off Admiralty Way, Lekki, Lagos',
            dob: '01/01/1994'
          }} />
        </div>

      </div>

    </div>
  </div>
)

export default CarList