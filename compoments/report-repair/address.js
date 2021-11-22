import PropTypes from 'prop-types';
import {useState} from 'react';
import Select from '../select';
import TextLink from '../textLink';
import Button from '../button';
import React from 'react';
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Address = ({handleChange, values}) => {
  const [state, setState] = useState({error: {}, value: 'null'});

  const { data, error } = useSWR(`/api/address?postcode=${values.postcode}`, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const addresses = data.map((a) => {
    return {
      obj: a,
      display: `${a.addressLine1}, ${a.addressLine2}, ${a.postCode}`
    }
  })

  const found_addresses = `${addresses?.length} ${addresses?.length === 1 ? 'address': 'addresses'} found`

  const onChange = e => {
    setState({error: {}, value: e.target.value})
  }

  const Continue = e => {
    e.preventDefault();

    if (state.value === 'null') {
      return setState({error: {
        msg: 'Required',
        touched: true
      }})
    }
    return handleChange('address', state.value);
  }

  return <div className="govuk-grid-row" data-cy="SectionLoaded">
    <div className="govuk-grid-column-two-thirds">
      <h1 className="govuk-heading-xl">Select an address</h1>
      <form action="">
        <div className={state.error.msg ? 'govuk-form-group govuk-form-group--error' : 'govuk-form-group'}>
          <span id={'address-error'}
            className="govuk-error-message">
            {state.error.msg}
          </span>
          <label className="govuk-label" htmlFor="select-address-dropdown">
            Select an address
          </label>
          <Select
            input={{
              name: 'address',
              onChange: onChange
            }}
            meta={state.error}
            id={'select-address-dropdown'}
          >
            <option value="null">
              {found_addresses}
            </option>
            {addresses?.map((address, i) => (
              <option value={Object.values(address.obj)} key={i}>
                {address.display}
              </option>
            ))}
          </Select>
        </div>
        <TextLink href="not-eligible">I can&apos;t find my address on this list</TextLink>
        <br/>
        <br/>
        <Button onClick={Continue} >Tell us where the problem is</Button>
      </form>
    </div>
  </div>
};

Address.defaultProps = {
  addresses: []
};

Address.propTypes = {
  addresses: PropTypes.array,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default Address;
