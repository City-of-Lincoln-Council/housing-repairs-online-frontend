import React from 'react';

const NotEligibleCommunalRepairs = () => {
  return (
    <div className="govuk-grid-row govuk-body-m">
      <div className="govuk-grid-column-two-thirds">
        <h1 className='govuk-heading-xl'>
          For communal repairs please call us during the office hours below
        </h1>
        <ul>
          <li> Monday 9am - 5pm</li>
          <li> Tuesday 9am - 5pm</li>
          <li> Wednesday 10am - 4.30pm</li>
          <li> Thursday 9am - 5pm</li>
          <li> Friday 9am - 4.30pm</li>
        </ul>
        <p>
          If you think the council is responsible for your property, please call
          <strong>01522 873 355</strong>.
        </p>
        <p>
          If you are a leaseholder you can still report communal repairs on
          <strong>01522 873 333</strong>.
        </p>
      </div>
    </div>
  );
};

export default NotEligibleCommunalRepairs;
