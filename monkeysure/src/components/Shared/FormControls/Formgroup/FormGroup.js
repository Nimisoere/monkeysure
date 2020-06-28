import React from 'react';
import './style.scss'
const FormGroup = ({ actionText, inputs }) => (
  <div className="form-group-wrapper ">
    {
      inputs?.map(input => input.type === 'select' ? (
          <select defaultValue="" key={input.name} name={input.name} className={`${input.classes} form-group-input`}>
            <option value="" disabled>{input.placeholder}</option>
          </select>
      ) : (
          <input key={input.name} name={input.name} type={input.type} placeholder={input.placeholder} className={`form-group-input ${input.classes}`}></input>
        )
      )
    }
    <button className="form-group-btn">{actionText}</button>
  </div>
)

export default FormGroup;