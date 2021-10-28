import PropTypes from 'prop-types';
import {
  GridRow,
  GridCol,
  Details,
  Paragraph,
  UnorderedList,
  ListItem
} from 'govuk-react'
import RadioFieldSet from '../radioFieldSet';

const Communal = ({handleChange, nextStep, values}) => {
  const name =  'communal';
  const title =  'Is the issue in a communal area?';
  const options =  [
    { value: 'yes', title: 'Yes'},
    { value: 'no', title: 'No'}
  ];
  const beforeButton =  (
    <Details summary="Which areas are communal?" data-testid="communal-area-prompt">
      <span data-testid="communal-area-info">
        Communal repairs are usually in areas that people share.
      </span><br/><br/>
      <Paragraph>They can include:</Paragraph>
      <UnorderedList>
        <ListItem>repairs to door entry systems</ListItem>
        <ListItem>lock repairs to communal doors</ListItem>
        <ListItem>lighting repairs to shared areas</ListItem>
        <ListItem>glazing repairs to shared doors or stairway windows</ListItem>
        <ListItem>roof and gutter repairs</ListItem>
        <ListItem>structure and external walls to your block</ListItem>
      </UnorderedList>
    </Details>
  );

  const Continue = val => {
    const selected = val[name];
    handleChange(name, selected);
  }

  return <GridRow>
    <GridCol setWidth="two-third">
      <RadioFieldSet name={name}
        title={title}
        options={options}
        onSubmit={Continue}
        beforeButton={beforeButton}
        checked={values[name]}></RadioFieldSet>
    </GridCol>
  </GridRow>
};

Communal.propTypes = {
  nextStep: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default Communal;
