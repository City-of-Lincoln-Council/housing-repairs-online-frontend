import PropTypes from 'prop-types';
import TextInput from '../textInput';
import React from 'react';
import {postCodeValidator} from '../validators';

const Postcode = ({handleChange, values}) => {
  const Continue = val => {
    handleChange('postcode', val);
  }

  return <div className="govuk-grid-row">
    <div>
      <TextInput
        value={values.postcode}
        name={'postcode'}
        onSubmit={Continue}
        validation={postCodeValidator}
        type="text"
        label="Postcode"
        title="What is the property address?"
        buttonText={'Select your address'}
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
