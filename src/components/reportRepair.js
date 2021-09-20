import { Component } from 'react';
import Postcode from './reportRepair/postcode';
import Address from './reportRepair/address';
import Confirmation from './reportRepair/confirmation';

export default class Report extends Component {
  state = {
    step: 1,
    postcode: '',
    address: '',
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  handleChange = (input, value) => {
    this.setState({ [input]: value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.step !== 1) {
      console.log('booooooo👻');
      console.log('prevProps:', prevProps);
      console.log('prevState:', prevState);
      console.log(this);
      const back = this.prevStep
      window.history.pushState(null, document.title, window.location.href);
      window.addEventListener('popstate', function (event){
        back();
        // window.history.pushState(null, document.title,  window.location.href);
      });
    }
  }

  render() {

    // if(this.state.step != 1){
    //   console.log('  blocking back');
    //   window.history.pushState(null, document.title, window.location.href);
    //   window.addEventListener('popstate', function (event){
    //     window.history.pushState(null, document.title,  window.location.href);
    //     console.log('going back');
    //   });
    // }
    const { step } = this.state;
    const {postcode, address} = this.state;
    const values = {postcode, address}

    switch (step) {
    case 1:
      return (<Postcode
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}/>)
    case 2:
      return (<Address
        prevStep={this.prevStep}
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}/>)
    case 3:
      return (<Confirmation
        values={values}/>)
    // never forget the default case, otherwise VS code would be mad!
    default:
      // do nothing
      return <div>nothing</div>
    }
  }
}