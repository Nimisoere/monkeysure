import React from 'react';
import './health-form.scss';

const Radio = ({
  name, radios, className
}) => (
    <div className={className}>
      {
        radios.map(radio => (
          <div className="radio-control" key={radio.id}>
            <input type="radio" defaultChecked={radio.checked} name={name} id={radio.id} value={radio.value} />
            <label htmlFor={radio.id}>
              {radio.label}
            </label>
          </div>
        ))
      }
    </div>
  );

export default Radio;