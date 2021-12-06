class Flow {
  constructor(setState, history, path) {
    this.setState = setState;
    this.history = history;
    this.path = path;
    this.flow = {
      'priority-list': {prevStep: false, nextStep: [
        {condition: 'gas-emergency/1', nextStep: 'smell-gas'},
        {condition: 'emergency/2', nextStep: 'emergency-repair'},
        {condition: 'emergency/3', nextStep: 'emergency-repair'},
        {condition: 'emergency/4', nextStep: 'emergency-repair'},
        {condition: 'emergency/5', nextStep: 'emergency-repair'},
        {condition: 'emergency/6', nextStep: 'emergency-repair'},
        {condition: 'emergency/7', nextStep: 'emergency-repair'},
        {condition: 'emergency/8', nextStep: 'emergency-repair'},
        {condition: 'non-emergency/9', nextStep: 'communal'}
      ]},
      'communal': {prevStep: 'priority-list', nextStep: [
        {condition: 'yes', nextStep: 'not-eligible-communal-repairs'},
        {condition: 'no', nextStep: 'postcode'}
      ]},
      'postcode': {prevStep: 'communal', nextStep: 'address'},
      'address': {prevStep: 'postcode', nextStep: 'repair-location'},
      'repair-location': { prevStep: 'address', nextStep: [
        {condition: 'kitchen', nextStep: 'repair-kitchen-problems'}
      ]},
      'repair-kitchen-problems': { prevStep: 'repair-location', nextStep: [
        {condition: 'cupboards', nextStep: 'repair-kitchen-cupboard-problems'},
        {condition: 'damp-or-mould', nextStep: 'repair-description-damp'},
        {condition: 'electrical', nextStep: 'repair-description'},
        {condition: 'heating-or-hot-water', nextStep: 'repair-description'},
        {condition: 'sink', nextStep: 'repair-description'},
        {condition: 'drip-or-leak', nextStep: 'repair-description-leak'},
        {condition: 'something-else', nextStep: 'repair-description'}
      ]},
      'repair-kitchen-cupboard-problems': {prevStep: 'cupboards', nextStep: 'repair-description'},
      'repair-description-damp': {prevStep: 'repair-kitchen-types', nextStep: [
        {condition: 'damp', nextStep: 'repair-damp'},
        {condition: 'mould', nextStep: 'repair-description-damp-mold'},
        {condition: 'both', nextStep: 'repair-description'},
        {condition: 'not-sure', nextStep: 'repair-description'},
      ]},
      'repair-damp': { prevStep: 'repair-description-damp', nextStep: 'repair-description-damp-pipes'},
      'repair-description-damp-pipes': {prevStep: 'repair-damp', nextStep:'repair-description' },
      'repair-description-damp-mold': {prevStep:'repair-description-damp', nextStep: 'repair-description' },
      'repair-description-electrical': { prevStep: 'repair-kitchen-types', nextStep: [
        {condition: 'extractor-fan', nextStep: 'repair-description'},
        {condition: 'light-fitting', nextStep: 'repair-description'},
        {condition: 'light-switch', nextStep: 'repair-description'},
        {condition: 'smoke-detector-beeping', nextStep: 'repair-description-electrical-smoke-alarm'},
        {condition: 'sockets', nextStep: 'repair-description'},
        {condition: 'carbon-monoxide-alarm', nextStep: 'repair-description-electrical-carbon-monoxide-alarm'},
        {condition: 'something-else', nextStep: 'repair-description'}
      ]},
      'repair-description-electrical-smoke-alarm': {prevStep: 'repair-description-electrical'},
      'repair-description-electrical-carbon-monoxide-alarm': {prevStep: 'repair-description-electrical'},
      'repair-description-heating-water': {prevStep: 'repair-kitchen-types', nextStep: [
        {condition: 'no-heating-or-hot-water', nextStep: 'repair-description-heating-water-emergency'},
        {condition: 'radiator-not-working', nextStep: 'repair-description'},
        {condition: 'radiator-coming-loose', nextStep: 'repair-description'},
        {condition: 'radiator-leaking', nextStep: 'repair-description'},
        {condition: 'something-else', nextStep: 'repair-description'},
      ]},
      'repair-description-leak': { prevStep: 'repair-kitchen-types', nextStep: [
        {condition: 'dripping-from-wall-or-ceiling', nextStep: 'repair-description-leak-electrics'},
        {condition: 'containable-sink-leak', nextStep: 'repair-description'},
        {condition: 'tap-dripping-water', nextStep: 'repair-description'},
        {condition: 'running-tap', nextStep: 'emergency-repair'},
        {condition: 'non-containable-radiator-leak', nextStep: 'repair-description'},
        {condition: 'something-else', nextStep: 'repair-description'},
      ]},
      'repair-description-leak-electrics': {prevStep: 'repair-description-leak', nextStep: [
        {condition: 'dripping-on-to-electrics', nextStep: 'repair-leak-description-electrics-emergency'},
        {condition: 'containable-with-bucket', nextStep: 'repair-description-leak-inside'},
        {condition: 'not-containable', nextStep: 'repair-leak-description-electrics-emergency'}
      ]},
      'repair-description-leak-inside': {prevStep: 'repair-description-leak-electrics', nextStep: 'repair-description-leak-source'},
      'repair-description-leak-source': {prevStep: 'repair-description-leak-inside', nextStep: 'repair-description'},
      'repair-leak-description-electrics-emergency': {prevStep: 'repair-description-leak-electrics'},
      'repair-description': {prevStep:'' , nextStep: 'contact-person'},//need to investigate this as there are numerous prev steps, but it might just work
      'contact-person': {prevStep: 'repair-description', nextStep:'contact-details'},
      'contact-details': {prevStep: 'contact-person', nextStep: 'repair-availability'},
      'repair-availability': {prevStep: 'personal-details', nextStep: 'summary'},
      // 'contact-details-appointment': { prevStep: 'repair-availability', nextStep: 'appointment-playback'},
      // 'appointment-playback': {prevStep: 'contact-details-appointment', nextStep: [
      //   {condition: 'change-appointment', nextStep:'repair-availability'},
      //   {condition: 'keep-appointment', nextStep: 'contact-details'}
      // ]},
      'summary': {prevStep: 'appointment-playback', nextStep: [
        {condition: 'change-repair-address', nextStep: 'postcode'},
        {condition: 'change-contact-details', nextStep: 'contact-details'},
        {condition: 'change-phone-number', nextStep: 'contact-details-appointment'},
        {condition: 'change-location', nextStep: 'repair-location'},
        {condition: 'change-issue', nextStep: 'repair-kitchen-types'},
        {condition: 'change-description', nextStep: 'repair-description'},
        {condition: 'change-appointment-date', nextStep: 'repair-availability'},
        {condition: 'change-appointment-information', nextStep: 'personal-details'},
        {condition: 'confirm-and-report', nextStep: 'confirmation'}
      ]},
      'confirmation': {prevStep:'summary', nextStep: [
        {condition: 'report-another-issue', nextStep: 'index'},
        {condition: 'request-confirmation', nextStep: 'confirmation-template'}
      ]}
    }
  }
  nextStep (step, state, prevStep) {
    state.prevStep = prevStep ? prevStep : state.step
    state.step = step;
    this.setState(state);

    this.history.push(step)
  };
  _prevStepIsNotDefinedOrEqualsCurrentStep = (state) => (state.prevStep === state.step || !state.prevStep)

  _prevStepIsInFlow = (state) => (this.flow[state.step] && this.flow[state.step].prevStep)

  prevStep = (state) => {
    // Clicking the back button twice will result in the current
    // step being the same as the previous step, so we need to
    // workout what the new previous step should be.
    if (this._prevStepIsNotDefinedOrEqualsCurrentStep(state)) {
      if (this._prevStepIsInFlow(state)) {
        state.prevStep = this.flow[state.step].prevStep
      } else {
        return this.history.push('/')
      }
    }

    state.step = state.prevStep
    this.setState(state);
    this.history.push(state.prevStep)
  }
  handleChange = (input, value, state) => {
    state.data[input] = value
    let nextFlowStep =  this.flow[state.step]?.nextStep
    if (nextFlowStep) {
      if (Array.isArray(nextFlowStep)) {
        const condition = nextFlowStep.find(o => o.condition === value);
        nextFlowStep = condition ? condition.nextStep : state.step;
      }
      return this.nextStep(nextFlowStep, state);
    }

    const { flowNextStep, flowPrevStep } = this._stepsFromUrl()
    state.prevStep = flowPrevStep;
    this.nextStep(flowNextStep, state, flowPrevStep);
  };

  _stepsFromUrl = () =>{
    const urlStep = window.location.pathname.split('/').pop()
    const flowNextStep = Object.keys(this.flow).find(key => this.flow[key].prevStep === urlStep);
    return {
      flowNextStep: flowNextStep,
      flowPrevStep: urlStep
    }
  }
}
export default Flow;
