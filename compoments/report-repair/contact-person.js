import PropTypes from 'prop-types';
import TextInput from '../textInput';
import React from 'react';
import {phoneValidator} from '../../helpers/validators';


const ContactPerson = ({handleChange, values}) => {
  const Continue = val => {
    handleChange('contactPersonNumber', val);
  }

  return <div className="govuk-grid-row">
    <div>
      <TextInput
        value={values.contactPersonNumber}
        name={'phone-number'}
        onSubmit={Continue}
        validation={phoneValidator}
        type="tel"
        hint="Please enter a UK landline or mobile phone number"
        title="What number should we call, if we need to get in touch?"
        buttonText={'Continue'}
        long={true}
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
