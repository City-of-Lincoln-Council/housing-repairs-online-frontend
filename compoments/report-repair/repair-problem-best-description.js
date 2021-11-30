import React from 'react';
import PropTypes from 'prop-types';
import RadioFieldSet from '../radioFieldSet';

const RepairProblemBestDescription = ({handleChange, values, options}) => {
  const name =  'repairProblemBestDescription';
  const title =  'What best describes the problem?';

  const Continue = val => {
    const selected = val[name];
    handleChange(name, selected);
  }

  return <div className="govuk-grid-row">
    <div className="govuk-grid-column-two-thirds">
      <RadioFieldSet
        name={name}
        title={title}
        options={options}
        onSubmit={Continue}
        checked={values[name]}
        buttonText='Continue'
      />
    </div>
  </div>
};

RepairProblemBestDescription.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
  options: PropTypes.array,
}

export default RepairProblemBestDescription;
