import React from 'react';
import ThankYou from '../../components/ThankYou';
import ConfirmationDetails from '../../components/ConfirmationDetails';
import Upsell from '../../components/Upsell';

const Confirmation = () => (
  <div className="confirmation mb-10">
    <ThankYou />
    <ConfirmationDetails />
    <Upsell />
  </div>
)

export default Confirmation;