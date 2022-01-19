import {useRouter} from 'next/router';
import Address from '../../compoments/report-repair/address';
import Communal from '../../compoments/report-repair/communal';
import EmergencyRepair from '../../compoments/report-repair/emergency-repair';
import NotEligible from '../../compoments/report-repair/not-eligible';
import NotEligibleCommunalRepairs
from '../../compoments/report-repair/not-eligible-communal-repairs';
import Postcode from '../../compoments/report-repair/postcode';
import PriorityList from '../../compoments/report-repair/priority-list';
import RepairLocation from '../../compoments/report-repair/repair-location';
import SmellGas from '../../compoments/report-repair/smell-gas';
import Flow from '../../flow';
import {useEffect, useState} from 'react';
import React from 'react';
import BackLink from '../../compoments/backLink';
import RepairProblem from '../../compoments/report-repair/repair-problem';
import RepairProblemBestDescription from '../../compoments/report-repair/repair-problem-best-description';
import RepairDescription from '../../compoments/report-repair/repair-description';
import RepairAvailability from '../../compoments/report-repair/repair-availability';
import Summary from '../../compoments/report-repair/summary';
import ContactPerson from '../../compoments/report-repair/contact-person';
import ContactDetails from '../../compoments/report-repair/contact-details';
import Confirmation from '../../compoments/report-repair/confirmation';
import Error from '../../compoments/error';

function ReportRepair() {
  const [state, setState] = useState({data:{}, step: 'priority-list'});
  const [changeLinkUrls, setChangeLinkUrls] = useState({});
  const router = useRouter()

  const currentPath = router.query.route

  const [prevSteps, setPrevSteps] = useState([]);

  const flow = new Flow(setState, router, 'report-repair', prevSteps, setPrevSteps);

  useEffect(() => {
    getNextStepForRepairProblem()
    router.beforePopState(({ as }) => {
      flow.prevStep(state)
      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [router]);

  const handleChange = (input, value) => {
    flow.handleChange(input,value,state)
  };
  const getNextStepForRepairProblem = () => {
    let currentChangeLinkUrls = changeLinkUrls
    if(state.data.repairLocation){
      currentChangeLinkUrls[state.data.repairLocation.value] = flow.getNextStepFromPreviousStepAndCondition('repair-location', state.data.repairLocation.value);
      setChangeLinkUrls(currentChangeLinkUrls)
    }
    if(state.data.repairProblem){
      currentChangeLinkUrls[state.data.repairProblem.value] = flow.getNextStepFromPreviousStepAndCondition(currentChangeLinkUrls[state.data.repairLocation.value], state.data.repairLocation.value);
      setChangeLinkUrls(currentChangeLinkUrls)
    }
  }

  const [showBack, setShowBack] = useState(true)
  const [confirmation, setConfirmation] = useState('');
  const [formError, setFormError] = useState();
  const [requestId, setRequestId] = useState();

  const submit = (values) => {
    fetch('/api/repair', {
      method: 'POST',
      body: JSON.stringify({
        postcode: values.postcode,
        address: values.address,
        location: values.repairLocation,
        problem: values.repairProblem,
        issue: values.repairProblemBestDescription,
        contactPersonNumber: values.contactPersonNumber,
        description: values.description,
        contactDetails: values.contactDetails,
        time: values.availability
      }),
    }).then(response =>{
      console.log(response)
      if (response.ok) {
        setShowBack(false);
        router.push('confirmation');
        setConfirmation(values.contactDetails.value);
        return response.text().then((text)=> {
          setRequestId(text);
        });
      }
      window.history.scrollRestoration = 'manual';
      setFormError(
        <Error
          name="summary"
          heading="An error occurred while requesting your request"
          body="Please call 01522 873333 to complete your repair request"></Error>
      )
    })
  }

  const prevStep = (e) => {
    e?.preventDefault();
    flow.prevStep(state)
  }
  const values = state.data;
  const changeLinkUrlValues = changeLinkUrls

  const component = () => {
    switch (currentPath) {
    case 'summary' :
      return (
        <Summary
          changeLinkUrlValues={changeLinkUrlValues}
          submit={submit}
          values={values}
        />
      )
    case 'confirmation':
      return (
        <Confirmation
          requestId={requestId}
          confirmation={confirmation}
        />
      )
    case 'contact-person':
      return (
        <ContactPerson
          handleChange={handleChange}
          values={values}
        />
      )
    case 'contact-details':
      return (
        <ContactDetails
          handleChange={handleChange}
          values={values}
        />
      )
    case 'address':
      return (
        <Address
          handleChange={handleChange}
          values={values}/>
      )
    case 'communal':
      return (
        <Communal
          handleChange={handleChange}
          values={values}/>
      )
    case 'emergency-repair':
      return (
        <EmergencyRepair/>
      )
    case 'not-eligible':
      return (
        <NotEligible/>
      )
    case 'not-eligible-communal-repairs':
      return (
        <NotEligibleCommunalRepairs/>
      )
    case 'postcode':
      return (
        <Postcode
          handleChange={handleChange}
          values={values}/>
      )
    case 'priority-list':
      return (
        <PriorityList
          handleChange={handleChange}
          values={values}/>
      )
    case 'repair-location':
      return (
        <RepairLocation
          handleChange={handleChange}
          values={values}
        />
      )
    case 'repair-kitchen-problems':
      return (
        <RepairProblem
          handleChange={handleChange}
          values={values}
          options = {[{ value: 'cupboards', title: 'Cupboards, including damaged cupboard doors'}]}
        />
      )
    case 'repair-kitchen-cupboard-problems':
      return (
        <RepairProblemBestDescription
          handleChange={handleChange}
          values={values}
          options = {[
            { value: 'doorHangingOff', title: 'Hanging door'},
            { value: 'doorMissing', title: 'Missing door'},
          ]}
        />
      )
    case 'smell-gas':
      return (
        <SmellGas/>
      )
    case 'repair-description':
      return (
        <RepairDescription
          handleChange={handleChange}
          values={values}
        />
      )
    case 'repair-availability':
      return (
        <RepairAvailability
          handleChange={handleChange}
          values={values}
          fromDate={router.query.fromDate}
        />
      )
    default:
      return <div>Not found</div>;
    }
  }

  return (
    <>
      {showBack && <BackLink href="#" onClick={prevStep}>Back</BackLink>}
      <div className="govuk-!-margin-top-7">
        {formError}
        {component()}
      </div>
    </>
  )
}

export async function getStaticPaths() {

  const paths = [
    {params: { route: 'summary'}},
    {params: { route: 'address'} },
    {params: { route: 'confirmation'} },
    {params: { route: 'communal'} },
    {params: { route: 'emergency-repair'} },
    {params: { route: 'contact-person'} },
    {params: { route: 'contact-details'} },
    {params: { route: 'not-eligible'} },
    {params: { route: 'not-eligible-communal-repairs'} },
    {params: { route: 'postcode'} },
    {params: { route: 'priority-list'} },
    {params: { route: 'repair-location'} },
    {params: { route: 'smell-gas'} },
    {params: { route: 'repair-kitchen-problems'} },
    {params: { route: 'repair-kitchen-cupboard-problems'} },
    {params: { route: 'repair-description'} },
    {params: { route: 'repair-availability'} },
    {params: { route: 'smell-gas'} }
  ]

  return { paths, fallback: false };
}

export async function getStaticProps({ }) {
  return { props: {} };
}
export default ReportRepair;
