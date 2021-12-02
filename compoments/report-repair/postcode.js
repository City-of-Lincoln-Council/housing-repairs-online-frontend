import PropTypes from 'prop-types';
import TextInput from '../textInput';
import React from 'react';


const Postcode = ({handleChange, values}) => {
  const Continue = val => {
    handleChange('postcode', val);
  }

  const Validation = {
    errorMessage: 'Not a valid postcode',
    isValid: (postcode) =>{
      const str = postcode.toUpperCase();
      const regexp = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;
      return regexp.test(str);
    }
  }

  return <div className="govuk-grid-row">
    <div>
      <TextInput
        value={values.postcode}
        name={'postcode'}
        onSubmit={Continue}
        validation={Validation}
        label="Postcode"
        title="What is the property address?"
        buttonText={'Select your address'}
        inputTextWidthClass={'govuk-input--width-10'}
      ></TextInput>
    </div>
  </div>
};

Postcode.propTypes = {
  storeAddresses: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default Postcode;
