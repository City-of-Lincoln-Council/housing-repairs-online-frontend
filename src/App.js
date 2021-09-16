import './App.css';
import {
  H1,
  H2,
  Paragraph,
  WarningText,
  Details,
  Button,
  ButtonArrow,
} from 'govuk-react';

function App() {
  return (
    <div>
      <H1>Repairs Online</H1>
      <Paragraph>
        We provide housing repairs for council tenants through this online
        service.
      </Paragraph>

      <WarningText>
        If you can smell gas, please call the gas emergency number on: 0800 111
        999.
      </WarningText>
      <Details summary="What to do now if you smell gas">
        <ol>
          <li>Turn off the gas supply at the gas meter</li>
          <li>Extinguish all sources of ignition</li>
          <li>Do not smoke</li>
          <li>Do not operate electrical light switches and power sockets</li>
          <li>
            Do not use the door entry system - if you need to let someone in, go
            down to the entrance door to open it
          </li>
          <li>Open doors and windows to ventilate the area</li>
          <li>
            Contact National Grid on 0800 111 999 from outside the property
          </li>
        </ol>
      </Details>
      <Button icon={<ButtonArrow />}>Start now</Button>
      <H2>Before you start</H2>
      <Paragraph>
        Reports can be made without signing up for a council account. If you
        have an account you will be able to see your report there.
      </Paragraph>
      <H2>Emergency repairs</H2>
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
    </div>
  );
}

export default App;
