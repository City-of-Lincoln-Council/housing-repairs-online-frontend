import PropTypes from 'prop-types';
import TextInput from '../textInput';
import React from 'react';
import parsePhoneNumber from 'libphonenumber-js'
import RadioFieldSet from '../radioFieldSet';


const ContactDetails = ({handleChange, values}) => {
  const Continue = val => {
    handleChange('ContactDetailsNumber', val);
  }

  const Validation = {
    errorMessage: 'Not a valid uk number',
    isValid: (val) =>{
      const phoneNumber = parsePhoneNumber(val, 'GB')
      if (phoneNumber) {
        return phoneNumber.isValid()
      }
      return false
    }
  }
  const options =  [
    { value: 'text', title: 'Text message (recommended)', conditional: {
      label: 'Please enter a UK mobile (preferred) or landline phone number',
      type: 'number'
    }},
    { value: 'email', title: 'Email', conditional: {
      label: 'Please enter your email address',
      type: 'email'
    }}
  ];

  return <div className="govuk-grid-row">
    <div>
      <RadioFieldSet name={'name'}
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
