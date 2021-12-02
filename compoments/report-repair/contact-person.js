import PropTypes from 'prop-types';
import React from 'react';
import TextInput from "../textInput";


const ContactPerson = ({ values }) => {
  const Continue = val => {
    handleChange('contactPersonNumber', val);
  }
  const Validation = {
    errorMessage: 'Not a valid uk number',
    isValid: (contactPersonNumber) =>{
      const regexp = /^((((\(?0\d{4}\)?\s?\d{3}\s?\d{3})|(\(?0\d{3}\)?\s?\d{3}\s?\d{4})|(\(?0\d{2}\)?\s?\d{4}\s?\d{4}))(\s?\(\d{4}|\d{3}))?)|((\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3})|((((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\(\d{4}|\d{3}))?$/;
      return regexp.test(contactPersonNumber);
    }
  }
  return (
    <div>
      <TextInput
        value={values.contactPersonNumber}
        name={'number'}
        onSubmit={Continue}
        validation={Validation}
        label="UK telephone number"
        title="What number should we call, if we need to get in touch?"
        buttonText={'Provide contact details'}
        inputTextWidthClass={'govuk-input--width-20'}
      ></TextInput>
    </div>
  );
};
ContactPerson.propTypes = {
  values: PropTypes.object,
};
export default ContactPerson;
