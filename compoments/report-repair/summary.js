import React, {useEffect, useState} from 'react';
import SummaryList from '../summaryList';
import Button from '../button';

const Summary = ({values, changeLinkUrlValues, submit}) => {
  let [whatIsRepairProblemLink, setWhatIsRepairProblemLink] = useState(null)
  let [describeRepairProblemLink, setDescribeRepairProblemLink] = useState(null)


  useEffect(()=>{
    setWhatIsRepairProblemLink(changeLinkUrlValues[values.repairLocation?.value])
    setDescribeRepairProblemLink(changeLinkUrlValues[values.repairProblem?.value])
  }, [values, changeLinkUrlValues])

  const personalDetailsSummary = [
    {pageName:'Repair address', value: values.address?.display, link: 'postcode'},
    {pageName:'Appointment contact number', value: values.contactPersonNumber, link: 'contact-person'},
  ]
  const repairDetailsSummary = [
    { pageName:'Where is the problem?', value: values.repairLocation?.display, link:'repair-location'},
    { pageName:'What is the problem?', value: values.repairProblem?.display, link: changeLinkUrlValues[values.repairLocation?.value]},
    { pageName:'What best describes the problem?', value: values['repairProblemBestDescription']?.display, link: changeLinkUrlValues[values.repairProblem?.value]},
    { pageName:'Description', value: values.description?.text, link:'repair-description'}
  ]
  const appointmentDetailsSummary = [
    { pageName:'Date', value: values.availability?.display, link:'repair-availability'},
    { pageName:'Confirmation contact details', value: values.contactDetails?.value, link: 'contact-details'},
  ]

  return(
    <>{values && whatIsRepairProblemLink && describeRepairProblemLink && (
      <div data-cy="summary">
        <div className="govuk-grid-row govuk-body-m">
          <div className="govuk-grid-column-two-thirds">
            <h1 className='govuk-heading-xl'>Request summary</h1>

            <h2 className="govuk-heading-m">Personal details</h2>
            <SummaryList summary={personalDetailsSummary}/>

            <h2 className="govuk-heading-m">Repair details</h2>
            <SummaryList summary={repairDetailsSummary}/>

            <h2 className="govuk-heading-m">Appointment details</h2>
            <SummaryList summary={appointmentDetailsSummary}/>

          </div>
        </div>
        <Button
          preventDoubleClick={true}
          onClick={()=>{
            submit(values);
          }}>Continue</Button>
      </div>
    )}
    </>
  )
}
export default Summary
