import {
  H1,
  H4,
  H3,
  Paragraph,
  WarningText,
  Details,
  Button,
  ButtonArrow,
  UnorderedList,
  OrderedList,
  ListItem,
  Link,
  RelatedItems,
  GridRow,
  GridCol,
} from 'govuk-react';
import { Fragment } from 'react';


function LandingPage() {
  return (
    <Fragment>
      <GridRow>
        <GridCol setWidth="two-thirds">
          <H1>Report a repair</H1>
          <Paragraph>
            We provide housing repairs for council tenants through this online
            service.
          </Paragraph>
          <WarningText data-testid="landing-page-warning">
            If you can smell gas, please call the gas emergency number on: 0800 111
            999.
          </WarningText>
          <Details summary="What to do now if you smell gas" className="govuk-!-margin-top-6" data-testid="landing-page-gas-prompt">
            <OrderedList>
              <ListItem data-testid="first-emergency-gas-option">Turn off the gas supply at the gas meter</ListItem>
              <ListItem>Extinguish all sources of ignition</ListItem>
              <ListItem>Do not smoke</ListItem>
              <ListItem>Do not operate electrical light switches and power sockets</ListItem>
              <ListItem>
                Do not use the door entry system - if you need to let someone in, go
                down to the entrance door to open it
              </ListItem>
              <ListItem>Open doors and windows to ventilate the area</ListItem>
              <ListItem>
                Contact National Grid on 0800 111 999 from outside the property
              </ListItem>
            </OrderedList>
          </Details>
          <Button icon={<ButtonArrow />} start='true' >Start now</Button>
          <H3>Before you start</H3>
          <Paragraph>
            Reports can be made without signing up for a council account. If you
            have an account you will be able to see your report there.
          </Paragraph>
          <H4>Emergency repairs</H4>
          <Paragraph>
            An emergency repair is when there&apos;s immediate danger to you or the
            structure of the building. In an emergency we&apos;ll make the situation
            safe; we may need to return another day to complete the full repair.
          </Paragraph>
          <Paragraph>
            All emergency repairs can be reported 24 hours a day, 7 days a week by
            calling **0800 952 4444** or **020 7525 2600**. You may experience
            longer waiting times due to a high volume of calls.
          </Paragraph>
        </GridCol>
        <GridCol setWidth="one-third">
          <RelatedItems>
            <H4>Related pages</H4>
            <UnorderedList listStyleType="none">
              <ListItem>
                <Link href="#">Report a communal repair</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Fix it yourself videos</Link>
              </ListItem>
            </UnorderedList>
          </RelatedItems>
        </GridCol>
      </GridRow>
    </Fragment>
  );
}

export default LandingPage;
