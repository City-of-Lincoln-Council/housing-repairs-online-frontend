import PropTypes from 'prop-types';
import TextInput from '../textInput';
import React from 'react';
import RadioFieldSet from '../radioFieldSet';
import {phoneValidator} from '../validators';


const ContactPerson = ({handleChange, values}) => {
  const Continue = val => {
    handleChange('contactPersonNumber', val);
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
      <TextInput
        value={values.contactPersonNumber}
        name={'phone-number'}
        onSubmit={Continue}
        validation={phoneValidator}
        type="number"
        label="UK telephone number"
        title="What number should we call, if we need to get in touch?"
        buttonText={'Provide contact details'}
        inputTextWidthClass={'govuk-input--width-20'}
      ></TextInput>
      <RadioFieldSet name={'name'}
        title={'title'}
        options={options}
        onSubmit={Continue} buttonText={'Continue'}
        conditional={false}
      ></RadioFieldSet>
    </div>
  </div>
};

ContactPerson.propTypes = {
  storeAddresses: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default ContactPerson;
