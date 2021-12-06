import PropTypes from 'prop-types';
import React from 'react';
import {phoneValidator, emailValidator} from '../validators';
import RadioFieldSet from '../radioFieldSet';


const ContactDetails = ({handleChange, values}) => {
  const Continue = val => {
    handleChange('contactDetails', val);
  }

  const options =  [
    { value: 'text', title: 'Text message (recommended)', conditional: {
      label: 'Please enter a UK mobile (preferred) or landline phone number',
      type: 'number', validator: phoneValidator
    }},
    { value: 'email', title: 'Email', conditional: {
      label: 'Please enter your email address',
      type: 'email', validator: emailValidator
    }}
  ];

  return <div className="govuk-grid-row">
    <div>
      <RadioFieldSet name={'contactDetails'}
        title={'How should we confirm\n the appointment?'}
        options={options}
        onSubmit={Continue} buttonText={'Continue'}
        conditional={false}
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
