import React from 'react';
import './confirmation-details.scss';
import CarConfirmationDetail from './Details/Car';
import HomeConfirmationDetail from './Details/Home';
import LifeConfirmationDetail from './Details/Life';
import PhoneConfirmationDetail from './Details/Phone';
import FuneralConfirmationDetail from './Details/Funeral';
import TravelConfirmationDetail from './Details/Travel';
import { useParams } from 'react-router';
import HealthConfirmationDetail from './Details/Health';

const renderDetail = (category) => {
  switch (category) {
    case 'cars':
      return <CarConfirmationDetail />;
    case 'home':
      return <HomeConfirmationDetail />;
    case 'life':
      return <LifeConfirmationDetail />;
    case 'phone':
      return <PhoneConfirmationDetail />;
    case 'funeral':
      return <FuneralConfirmationDetail />;
    case 'travel':
      return <TravelConfirmationDetail />;
    case 'health':
      return <HealthConfirmationDetail />;
    default:
      return ''
  }
}

const ConfirmationDetails = () => {
  const category = useParams()?.category;

  return (
    <div className="confirmation-details">
      <div className="container mx-auto sm:flex-no-wrap flex-wrap details-container">
        <div className="flex sm:flex-no-wrap flex-wrap justify-center">
          <div className="detail">
            <h4 className="text-xl font-light">John Smith</h4>
            <p>johnsmith@mail.com</p>
            <p>08000000000</p>
          </div>
          <div className="detail">
            {renderDetail(category)}
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
}

export default ConfirmationDetails;