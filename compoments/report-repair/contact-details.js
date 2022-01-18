import PropTypes from 'prop-types';
import React from 'react';
import {
  phoneValidator,
  emailValidator,
  phoneOnKeyPress
} from '../../helpers/validators';
import RadioFieldSet from '../radioFieldSet';


const ContactDetails = ({handleChange, values}) => {
  const name = 'contactDetails'
  const Continue = val => {
    handleChange(name, {
      type: val.selected,
      value: val.input
    });
  }

  const options =  [
    { value: 'text', title: 'Text message (recommended)', conditional: {
      label: 'Please enter a UK mobile (preferred) or landline phone number',
      type: 'tel', validator: phoneValidator, onKeyPress: phoneOnKeyPress
    }},
    { value: 'email', title: 'Email', conditional: {
      label: 'Please enter your email address',
      type: 'email', validator: emailValidator
    }}
  ];

  return <div className="govuk-grid-row" data-cy="contact-details">
    <div>
      <RadioFieldSet name={name}
        title={'How should we confirm the appointment?'}
        options={options}
        onSubmit={Continue}
        checked={values[name]?.type}
        buttonText={'Continue'}
        conditionalValue={{[values[name]?.type]: values[name]?.value}}
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
