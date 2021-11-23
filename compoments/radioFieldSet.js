import PropTypes from 'prop-types';
import Button from './button';
import {Component} from 'react';

import React from 'react';

class RadioFieldSet extends Component {
  constructor(props) {
    super(props);
    this.name = this.props.name;
    this.checked = this.props.checked;
    this.buttonText = this.props.buttonText;
    this.orDivider = this.props.orDivider;
    this.options = this.props.options.map(o =>{
      if (this.checked == o.value) {
        o.checked = true
      }
      return o
    });
    this.title = this.props.title;
    this.onSubmit = this.props.onSubmit;
    this.beforeButton = this.props.beforeButton;
    this.state = {
      error: null,
      value: {[this.name]: this.checked}
    };
  }

  setValue(event) {
    this.setState({
      value: {[this.name]: event.target.value},
      error: null
    })
  };

  formSubmit = () => {
    if (this.state.value[this.name]) {
      this.onSubmit(this.state.value)
    } else {
      this.setState({error: 'Required'})
    }
  };

  includeOrDivider(i) {
    return this.orDivider && i == (this.options.length - 1);
  };

  render(){

    return (
      <div>
        <h1 className="govuk-heading-xl">
          {this.title}
        </h1>
        <div className={this.state.error ? 'govuk-form-group--error' : 'govuk-form-group'}>
          <span id={`${this.name}-error`}
            className="govuk-error-message">
            {this.state.error}
          </span>
          <div className="govuk-radios" onChange={this.setValue.bind(this)}>
            {this.options.map((o, i) => (
              <span>
                { this.includeOrDivider(i) ? <div className="govuk-radios__divider">or</div> : <br/>}
                <div className="govuk-radios__item" key={i}>
                  <input className="govuk-radios__input govuk-input--width-10"
                    id={`${this.name}-${i}`} name={this.name}
                    type="radio" value={o.value} defaultChecked={o.checked}/>
                  <label className="govuk-label govuk-radios__label"
                    htmlFor={`${this.name}-${i}`}>
                    {o.title}
                  </label>
                </div>
              </span>
            ))}
          </div>
        </div>
        <div className="govuk-!-margin-top-6">
          {this.beforeButton}
        </div>
        <Button onClick={this.formSubmit}>{this.buttonText}</Button>
      </div>
    )
  }
}

RadioFieldSet.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title:  PropTypes.string.isRequired,
  checked: PropTypes.string,
  beforeButton:  PropTypes.object,
  orDivider: PropTypes.boolean
};
export default RadioFieldSet;


