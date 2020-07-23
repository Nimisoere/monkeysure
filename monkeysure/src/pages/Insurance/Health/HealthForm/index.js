import React from 'react';
import './health-form.scss';
import Radio from './Radio';

const HealthForm = ({ action }) => (
  <form className="health-form w-full mb-12 flex">
    <div className="container mx-auto py-8">
      <div className="w-full text-center">
        <h4 className="text-xl font-normal">Get a Quote</h4>
      </div>
      <div className="w-full text-center">
        <h4 className="text-xl font-light">I want to cover ...</h4>
        <div className="radio-wrapper">
          <Radio className="header-radio" name="cover" radios={[
            { id: 'self', value: 'self', checked: true, label: 'Myself' },
            { id: 'domestic', value: 'domestic', label: 'My domestic worker' },
            { id: 'employees', value: 'employees', label: 'My business employees' },
          ]} />
        </div>
      </div>
      <div className="w-full mb-4 text-center">
        <div>I am a <input type="number" /> year old <Radio className="body-radio mx-2" name="gender" radios={[
          { id: 'male', value: 'male', label: 'man' },
          { id: 'female', value: 'female', label: 'woman' },
        ]} /></div>
      </div>
      <div className="w-full mb-4 text-center">
        <div>who <Radio className="body-radio mx-2" name="smoke" radios={[
          { id: 'smoke', value: 'smoke', label: 'smoke' },
          { id: 'no-smoke', value: 'no-smoke', label: 'doesn\'t smoke' },
        ]} /></div>
      </div>
      <div className="w-full mb-4 text-center">
        <div>and is <Radio className="body-radio mx-2" name="married" radios={[
          { id: 'married', value: 'married', label: 'married' },
          { id: 'no-married', value: 'no-married', label: 'not married' },
        ]} /></div>
      </div>
      <div className="w-full mb-4 text-center">
        <p>I earn NGN <input type="number" />  per month before tax</p>
      </div>
      <div className="w-full mb-4 text-center">
        <p>My highest level of education is</p>
      </div>
      <div className="w-full mb-4 text-center">
        <div><Radio className="body-radio mx-2" name="education" radios={[
          { id: 'high-school', value: 'high-school', label: 'High School' },
          { id: 'diploma', value: 'diploma', label: 'Diploma' },
          { id: 'bachelors', value: 'bachelors', label: 'Bachelors' },
          { id: 'masters', value: 'masters', label: 'Masters' },
          { id: 'mba', value: 'mba', label: 'MBA' },
          { id: 'md', value: 'md', label: 'MD' },
          { id: 'phd', value: 'phd', label: 'PhD' },
          { id: 'other', value: 'other', label: 'Other' },

        ]} /></div>
      </div>
      <div className="w-full mb-4 text-center">
        <div>I <Radio className="body-radio mx-2" name="national-id" radios={[
          { id: 'have', value: true, label: 'do' },
          { id: 'dont-have', value: false, label: 'do not' },
        ]} /> have a valid National ID number</div>
      </div>
      <div className="w-full mb-4 text-center">
        <p>My contact number is <input type="number" /></p>
      </div>
      <div className="w-full mb-4 text-center">
        <p>We won't share your information with anyone</p>
      </div>
      <div className="w-full mb-4 text-center">
        <button onClick={action} className="btn bg-primary">See my price</button>
      </div>
    </div>
  </form>
);

export default HealthForm;