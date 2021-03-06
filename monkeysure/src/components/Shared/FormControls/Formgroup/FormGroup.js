import React from 'react';
import './style.scss'
const FormGroup = ({ actionText, className, inputs, action = () => null }) => (
  <div className={`form-group-wrapper ${className || ''}`}>
    {
      inputs?.map((input, index) => input.type === 'select' ? (
          <select key={index} defaultValue="" name={input.name} className={`${input.classes} form-group-input`}>
            <option value="" disabled>{input.placeholder}</option>
          </select>
      ) : (
          <input key={index} name={input.name} type={input.type} placeholder={input.placeholder} className={`form-group-input ${input.classes}`}></input>
        )
      )
    }
    <button className="form-group-btn btn" onClick={action} >{actionText}</button>
  </div>
)

export default FormGroup;