import React from 'react';
import './pageheader.scss';

const PageHeader = ({ leadtext, subtext }) => (
  <div className="page-header">
    <div className="container mx-auto pt-12 pb-6 flex justify-between">
      <div>
        <h4 className="text-4xl color-primary">{leadtext}</h4>
        <p className="text-4xl  color-secondary">{subtext}</p>
      </div>
    </div>
  </div>
);

export default PageHeader;