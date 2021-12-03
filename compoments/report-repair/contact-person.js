import PropTypes from 'prop-types';
import TextInput from '../textInput';
import React from 'react';
import parsePhoneNumber from 'libphonenumber-js'


const ContactPerson = ({handleChange, values}) => {
  const Continue = val => {
    handleChange('contactPersonNumber', val);
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

  return <div className="govuk-grid-row">
    <div>
      <TextInput
        value={values.contactPersonNumber}
        name={'phone-number'}
        onSubmit={Continue}
        validation={Validation}
        type="number"
        label="UK telephone number"
        title="What number should we call, if we need to get in touch?"
        buttonText={'Provide contact details'}
        inputTextWidthClass={'govuk-input--width-20'}
      ></TextInput>
    </div>
  </div>
};

ContactPerson.propTypes = {
  storeAddresses: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default ContactPerson;
