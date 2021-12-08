import PropTypes from 'prop-types';
import React from 'react';
import {phoneValidator, emailValidator} from '../../helpers/validators';
import RadioFieldSet from '../radioFieldSet';


const ContactDetails = ({handleChange, values}) => {
  const name = 'contactDetails'
  const Continue = val => {
    handleChange(name, val);
  }
  const options =  [
    { value: 'text', title: 'Text message (recommended)', conditional: {
      label: 'Please enter a UK mobile (preferred) or landline phone number',
      type: 'tel', validator: phoneValidator
    }},
    { value: 'email', title: 'Email', conditional: {
      label: 'Please enter your email address',
      type: 'email', validator: emailValidator
    }}
  ];

  return <div className="govuk-grid-row">
    <div>
      <RadioFieldSet name={name}
        title={'How should we confirm the appointment?'}
        options={options}
        onSubmit={Continue}
        checked={values[name]?.selected}
        buttonText={'Continue'}
        conditionalValue={{[values[name]?.selected]: values[name]?.input}}
      ></RadioFieldSet>
    </div>
  </div>
};

ContactDetails.propTypes = {
  storeAddresses: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default ContactDetails;
