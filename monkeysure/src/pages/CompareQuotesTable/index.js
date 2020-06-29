import React from 'react';
import phone from '../../assets/images/phone.png';
import './compare.scss';
import QuotesTable from '../../components/QuotesTable';

const CompareQuotesTable = () => (
  <div className="compare-quotes">
    <div className="page-header">
      <div className="container mx-auto py-8 flex justify-between">
        <div>
          <h4 className="text-5xl color-primary">Compare Quotes</h4>
          <p className="text-base">You can add up to  3 quotes to compare side by side</p>
        </div>
        <div>
          <button className="btn mb-4 border-secondary"><img src={phone} alt="" /> Call us now</button>
          <p className="">to get help with quotes</p>
        </div>
      </div>
    </div>
    <div className="container flex py-8 mx-auto">
      <QuotesTable />
    </div>
  </div>
)

export default CompareQuotesTable;