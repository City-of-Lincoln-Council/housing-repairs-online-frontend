import PropTypes from 'prop-types';
import Details from '../details';
import RadioFieldSet from '../radioFieldSet';
import React from 'react';


const Communal = ({handleChange, values}) => {
  const name =  'communal';
  const title =  'Is the problem in a communal area?';
  const hintText = 'A communal area is an area that people share. For example, public doors, the roof, gutter repairs, structure and external walls.';
  const options =  [
    { value: 'yes', title: 'Yes'},
    { value: 'no', title: 'No'}
  ];

  const Continue = ({val}) => {
    const selected = val[name];
    handleChange(name, selected);
  }

  return (<div className="govuk-grid-row"  data-cy="communal">
    <div className="govuk-grid-column-two-thirds">
      <RadioFieldSet name={name}
        title={title}
        options={options}
        onSubmit={Continue} buttonText={'Continue'}
        checked={values[name]}
        hintText={hintText}
      />
    </div>
  </div>)
};

Communal.propTypes = {
  nextStep: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default Communal;
