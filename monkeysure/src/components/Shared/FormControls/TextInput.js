import React from 'react';
import './form.scss';

const Select = ({ placeholder, options = [], className }) => (
  <div className={`form-control-select ${className}`}>
    <select defaultValue='' className="form-control">
      <option value='' disabled>{placeholder}</option>
      {
        options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))
      }
    </select>
  </div>
)

const TextInput = ({ className, placeholder, label, type, options }) => {
  const renderControl = () => {
    const now = new Date().getUTCFullYear();
    switch (type) {
      case 'date':
        return <div className="flex justify-between">
          <Select placeholder="DD" className="mr-6" options={[...Array(30)].map((item, index) => ({ label: index + 1, value: index }))} />
          <Select placeholder="MM" className="mr-6" options={[...Array(12)].map((item, index) => ({ label: index + 1, value: index }))} />
          <Select placeholder="YYYY" options={Array(now - (now - 100)).fill('').map((v, idx) => ({ label: now - idx, value: now - idx }))} />
        </div>
      case 'money':
        return <div className="w-full form-control-money">
          <span className="currency">N</span>
          <input type="number" className="form-control" placeholder={placeholder} />
        </div>
      case 'select':
        return <Select placeholder={placeholder} options={options} />
      default:
        return <input type={type} className="form-control" placeholder={placeholder} />
    }
  }
  return (
    <div className={`form-control-wrapper ${className}`}>
      <label className="form-control-label" >
        <span className="label">{label}</span>
        {renderControl()}
      </label>
    </div>
  )
};

export default TextInput;