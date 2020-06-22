import React from 'react';
import './style.scss'
const FormGroup = ({ actionText, inputs }) => (
  <div className="form-group-wrapper ">
    {
      inputs?.map(input => <input key={input.name} name={input.name} type={input.type} placeholder={input.placeholder} className={`form-group-input ${input.classes}`}></input>)
    }
    <button className="form-group-btn">{actionText}</button>
  </div>
)

export default FormGroup;