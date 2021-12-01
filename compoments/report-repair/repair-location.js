import React from 'react';

import PropTypes from 'prop-types';
import RadioFieldSet from '../radioFieldSet';

const RepairLocation = ({handleChange, values}) => {
  const name =  'repairLocation';
  const title =  'Where is the problem?';
  const options =  [
    { value: 'kitchen', title: 'Kitchen'},
    { value: 'bedroom', title: 'Bedroom'},
    { value: 'bathroom', title: 'Bathroom'},
    { value: 'livingAreas', title: 'Living Areas'},
    { value: 'outside', title: 'Outside'},
  ];

  const Continue = val => {
    const selected = val[name];
    handleChange(name, selected);
  }

  return <div className="govuk-grid-row">
    <div className="govuk-grid-column-two-thirds">
      <RadioFieldSet name={name}
        title={title}
        options={options}
        onSubmit={Continue}
        checked={values[name]}
        buttonText='Continue'
      />
    </div>
  </div>
};

RepairLocation.propTypes = {
  nextStep: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default RepairLocation;
