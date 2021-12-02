import PropTypes from 'prop-types';
import React, {useState} from 'react';
import Button from '../button';
import {fetcher} from '../../helpers/fetcher';
import useSWR from 'swr';
import moment from 'moment';

const RepairAvailability = ({handleChange, values, nextAvailability}) => {
  const [error, setError] = useState();
  const [value, setValue] = useState();
  console.log(values)
  const baseURL = '/api/availability';
  const params =  {
    repairLocation:  values.repairLocation,
    repairProblem:  values.repairProblem,
    repairIssue: values.repairProblemBestDescription,
    uprn: values.uprn,
    next: nextAvailability
  }
  const apiUrl = `${baseURL}?${new URLSearchParams(params).toString()}`
  const { data, dataError } = useSWR(apiUrl, fetcher)

  if (dataError) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  let availability = {};

  if (data) {
    data.forEach((d) => {
      const date = moment(d.startTime)
      const dateString = date.format('Do MMMM YYYY')
      const startTime = date.format('h:mma');
      const endTime = moment(d.endTime).format('h:mma')
      const timeString = `${startTime} to ${endTime}`
      availability[dateString] ?
        availability[dateString].push(timeString) :
        availability[dateString] = [timeString]
    })
  }

  console.log(availability)
  const fieldName = 'availability';

  const Continue = () => {
    console.log(value)
    if (value) {
      return handleChange(fieldName, value);
    }
    setError('Required')
  }

  const onChange = (event) =>{
    console.log(event.target.value)
    setValue(event.target.value)
  }

  return <div className="govuk-grid-row">
    <div className="govuk-grid-column-two-thirds">
      <h1 className="govuk-heading-xl">
        When are you available?
      </h1>
      <p className="govuk-body-l">
        A responsible adult must be at the property
        for all of the repair appointment time slot and during the repair
        appointment.
      </p>
      <h3 className="govuk-heading-m govuk-!-padding-top-4">Please select a
        suitable time slot
      </h3>
      <hr/>
      <div className={error ? 'govuk-form-group--error' : 'govuk-form-group'}>
        <span id={`${fieldName}-error`}
          className="govuk-error-message">
          {error}
        </span>
        <div className="govuk-radios" onChange={onChange}>
          {Object.keys(availability).map((date, i) => (
            <div key={i} className='govuk-!-padding-bottom-4'>
              <h3 className="govuk-heading-m govuk-!-padding-top-4">
                {date}
              </h3>
              {availability[date].map((time, ti)=>(
                <div className="govuk-radios__item" key={`${i}-${ti}`}>
                  <input className="govuk-radios__input govuk-input--width-10"
                    id={`${fieldName}-${i}-${ti}`} name={fieldName}
                    type="radio" value={`${date} ${time}`}
                    defaultChecked={false}/>
                  <label className="govuk-label govuk-radios__label"
                    htmlFor={`${fieldName}-${i}-${ti}`}>
                    {time}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div>
        {nextAvailability ? (
          <a href="repair-availability"
            className="govuk-button govuk-button--secondary">Previous 5 days</a>
        ) : (
          <a href="repair-availability?next=true"
            className="govuk-button govuk-button--secondary">Next 5 days</a>
        )}
      </div>
      <Button onClick={Continue} >Continue</Button>
    </div>
  </div>
};



RepairAvailability.propTypes = {
  storeAddresses: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default RepairAvailability;
