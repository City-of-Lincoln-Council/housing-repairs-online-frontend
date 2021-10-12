import {
  H1,
  H2,
  H4,
  Paragraph,
  WarningText,
  Details,
  UnorderedList,
  ListItem,
  Link,
  RelatedItems,
  GridRow,
  GridCol,
} from 'govuk-react';
import { Fragment } from 'react';


function LandingPage() {
  const contactDetailsPageLink = (
    <Link href="https://www.lincoln.gov.uk/contact-1/get-touch" target="_blank">
      contact details page
    </Link>
  )

  const newTabLinkRenderer = ({href, children}) => (
    <Link href={href} target="_blank">
      {children}
    </Link>
  )

  return (
    <Fragment>
      <GridRow>
        <GridCol setWidth="two-thirds">
          <H1>Request a repair</H1>
          <H2>Before you start</H2>
          <WarningText data-testid="landing-page-gas-warning">
            If you suspect you have a gas leak, you must report it immediately
            to the Gas Emergency Service on 0800 111 999 or via textphone
            (minicom) on 0800 371 787
          </WarningText>
          <WarningText data-testid="landing-page-emergency-warning" className="govuk-!-margin-top-4">
            For other emergency repairs, please see customer services {contactDetailsPageLink}.
          </WarningText>
          <Details summary="What is an emergency?" className="govuk-!-margin-top-6" data-testid="landing-page-emergency-prompt">
            <div data-testid='landing-page-emergency-info'>
              <Paragraph>
                An emergency is defined as something which could cause danger to
                someone’s health or safety or cause serious damage and destruction
                to property.
              </Paragraph>
              <Paragraph>
                Emergency Out of Hours Repairs, please call **01522 534747**
              </Paragraph>
              <Paragraph>
                For emergencies in normal hours, please call **01522 873333**
              </Paragraph>
              <Paragraph>
                Opening times:
              </Paragraph>
              <unOrderedList>
                <ListItem>Monday 9am - 5pm</ListItem>
                <ListItem>Tuesday 9am - 5pm</ListItem>
                <ListItem>Wednesday 9am - 4.30pm</ListItem>
                <ListItem>Thursday 10am - 5pm</ListItem>
                <ListItem>Friday 9am - 4.30pm</ListItem>
              </unOrderedList>
            </div>
          </Details>
          <Paragraph>
            This service can only be used by **council tenants** to request a repair.
          </Paragraph>
          <Paragraph linkRenderer={newTabLinkRenderer}>
            To request a repair for a **communal area**, please see customer
            services [contact details page](https://www.lincoln.gov.uk/contact-1/get-touch).
          </Paragraph>
          <Details summary="Which areas are communal?" className="govuk-!-margin-top-6" data-testid="landing-page-communal-prompt">
            <div data-testid='landing-page-communal-info'>
              <Paragraph>
                Communal repairs are usually in areas that people share.
              </Paragraph>
              <Paragraph>
                They can include:
              </Paragraph>
              <unOrderedList>
                <ListItem>repairs to door entry systems</ListItem>
                <ListItem>lock repairs to communal doors</ListItem>
                <ListItem>lighting repairs to shared areas</ListItem>
                <ListItem>glazing repairs to shared doors or stairway windows</ListItem>
                <ListItem>roof and gutter repairs</ListItem>
                <ListItem>structure and external walls to your block</ListItem>
              </unOrderedList>
            </div>
          </Details>
          <a href="/report-repair" role="button" draggable="false"
            className="govuk-button govuk-button--start"
            data-module="govuk-button">
            Start now
            <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
            </svg>
          </a>
        </GridCol>
        <GridCol setWidth="one-third">
          <RelatedItems>
            <H4>Related pages</H4>
            <UnorderedList listStyleType="none">
              <ListItem>
                <Link href="#">Report a communal repair</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Leaseholder repairs</Link>
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
