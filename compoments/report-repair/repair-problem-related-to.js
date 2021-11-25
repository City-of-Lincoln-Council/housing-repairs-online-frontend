import React from 'react';
import PropTypes from 'prop-types';
import RadioFieldSet from '../radioFieldSet';

const RepairProblemRelatedTo = ({handleChange, values, options}) => {
  const name =  'repairProblemRelatedTo';
  const title =  'What does your problem relate to?';

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

RepairProblemRelatedTo.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
  options: PropTypes.array,
}

export default RepairProblemRelatedTo;
