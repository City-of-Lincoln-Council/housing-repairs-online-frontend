import {useRouter} from 'next/router';
import Address from '../../compoments/report-repair/address';
import Communal from '../../compoments/report-repair/communal';
import Confirmation from '../../compoments/report-repair/confirmation';
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

function ReportRepair() {
  const [state, setState] = useState({data:{}, step: 'priority-list'});

  const router = useRouter()

  const currentPath = router.query.route

  const flow = new Flow(setState, router, 'report-repair');

  useEffect(() => {
    router.beforePopState(({ as }) => {
      if (as !== router.asPath) {
        prevStep();
      }
      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [router]);

  const handleChange = (input, value) => {
    flow.handleChange(input,value,state)
  };

  const prevStep = () => {
    flow.prevStep(state)
  }

  const values = state.data;

  const component = () => {
    switch (currentPath) {
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
    case 'smell-gas':
      return (
        <SmellGas/>
      )
    default:
      return <div>Not found</div>;
    }
  }

  return (
    <>
      <BackLink href="#" onClick={prevStep}>Back</BackLink>
      {component()}
    </>
  )
}

export async function getStaticPaths() {

  const paths = [
    {params: { route: 'address'} },
    {params: { route: 'communal'} },
    {params: { route: 'emergency-repair'} },
    {params: { route: 'not-eligible'} },
    {params: { route: 'not-eligible-communal-repairs'} },
    {params: { route: 'postcode'} },
    {params: { route: 'priority-list'} },
    {params: { route: 'repair-location'} },
    {params: { route: 'smell-gas'} }
  ]

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: {} };
}
export default ReportRepair;
