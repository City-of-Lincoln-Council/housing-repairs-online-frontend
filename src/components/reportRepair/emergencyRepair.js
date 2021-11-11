import { List } from '@govuk-react/tabs';
import { H1, H3, GridRow, GridCol, Paragraph, UnorderedList, ListItem } from 'govuk-react';

const EmergencyRepair = () => {
  return (
    <GridRow>
      <GridCol setWidth="two-thirds">
        <H1>Your repair could be an emergency</H1>
        <H3>Emergencies</H3>
        <Paragraph>
          An emergency is defined as something which could cause danger to
          someone’s health or safety or cause serious damage and destruction to
          property.
        </Paragraph>
        <Paragraph>
          Emergency Out of Hours Repairs - Telephone: **01522 534747**
        </Paragraph>
        <Paragraph>For emergencies in normal hours, please call **01522 873333**</Paragraph>
        <Paragraph>
          Opening times:
        </Paragraph>
        <UnorderedList>
          <ListItem>Monday 9am - 5pm</ListItem>
          <ListItem>Tuesday 9am - 5pm</ListItem>
          <ListItem>Wednesday 10am - 4.30pm</ListItem>
          <ListItem>Thursday 9am - 5pm</ListItem>
          <ListItem>Friday 9am - 4.30pm</ListItem>
        </UnorderedList>
        <Paragraph>
          For non-emergency requests, call **01522 873 333**
        </Paragraph>
        <Paragraph>
          Please do not call the emergency out of hours number if the repair is not urgent.
        </Paragraph>
        <Paragraph>
          If you suspect you have a gas leak, you must report it immediately to
          the Gas Emergency Service **0800 111 999** or via textphone (minicom) on
          **0800 371 787**
        </Paragraph>
      </GridCol>
    </GridRow>
  );
};

export default EmergencyRepair;
