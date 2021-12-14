import React from 'react';
import Link from 'next/link'
export default function SummaryList ({summary}) {

  return(<dl className="govuk-summary-list govuk-!-margin-bottom-9">
    {summary.map((o, i) => (
      <div className="govuk-summary-list__row">
        <dt className="govuk-summary-list__key">
          {o.pageName}
        </dt>
        <dd className="govuk-summary-list__value">
          {o.value}
        </dd>
        <dd className="govuk-summary-list__actions">
          <Link href={o.link}>
            <a className={'govuk-link'}>Change</a>
          </Link>
          <span className="govuk-visually-hidden">{o.pageName}</span>
        </dd>
      </div>
    ))}
  </dl>)
}
