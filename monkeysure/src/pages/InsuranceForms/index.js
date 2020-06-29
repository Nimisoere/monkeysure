import React from 'react';
import './insurance-form.scss';
import PageHeader from '../../components/PageHeader';
import { homeRadioButtons } from '../../components/PageHeader/form-config';
import TextInput from '../../components/Shared/FormControls/TextInput';
import { useParams, useHistory } from 'react-router-dom';
import { formToRender } from '../../util';

const InsuranceForm = () => {
  const history = useHistory();
  const category = useParams()?.category;
  const form = formToRender(category);
  return (
    <div className="insurance-form">
      <PageHeader leadtext={form.leadtext} subtext={form.subtext} />
      <div className="container mx-auto py-8">
        <form>
          <p className="text-lg font-normal">{form.header}</p>
          <p className="text-sm font-light">{form.description}</p>
          <fieldset className="mt-6">
            <div className="flex flex-wrap justify-between">
              {
                form.fields.map((field, index) => (
                  <TextInput
                    key={index}
                    className={`form-grid ${field.span < 12 ? `w-${field.span}/12` : 'w-full'}`}
                    placeholder={field.placeholder}
                    options={field.options}
                    label={field.label}
                    type={field.type}
                  />
                ))
              }
            </div>
            {
              category === 'home' && <div className="home_insurance-radios">
                <p className="text-lg font-normal">{homeRadioButtons.header}</p>
                <p className="text-sm font-light">{homeRadioButtons.description}</p>
                <div className="radio-wrapper">
                  {
                    homeRadioButtons.fields.map((radio, index) => (
                      <div className="form-radio" key={index}>
                        <p>{radio.label}</p>
                        <div className="flex">
                          {
                            radio.options.map((option, optionIndex) => (
                              <div className="radio-control" key={`q_${index + 1}_${optionIndex}`}>
                                <input type="radio" name={`q_${index + 1}`} id={`q_${index + 1}_${optionIndex}`} value={option.value} />
                                <label htmlFor={`q_${index + 1}_${optionIndex}`} key={index}>
                                  {option.label}
                                </label>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            }

            <div className="my-4">
              <label>
                <input type="checkbox" className="mr-6 check-box" name="news_letter_optin" value={true} />
              Yes, I'll like to be the first to hear about offers, news and tips
            </label>
            </div>
            <button onClick={() => history.push(category === 'cars' ? `/${category}/insurance-form/add-car` : `/${category}/listing`)} className="btn bg-primary mt-4 proceed-btn">Proceed</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default InsuranceForm;