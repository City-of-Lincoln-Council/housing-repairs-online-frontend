import PropTypes from 'prop-types';
import { Button, Select, GridRow, GridCol, Fieldset, FormGroup, Link } from 'govuk-react'
import { Link as RouterLink } from 'react-router-dom';
import {useState} from 'react';

const Address = ({handleChange, values, addresses}) => {
  const [state, setState] = useState({error: {}, value: 'null'});

  addresses = addresses.map((a) => {
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
        error: 'Required',
        touched: true
      }})
    }
    return handleChange('address', state.value);
  }

  return <GridRow>
    <GridCol setWidth="two-thirds">
      <Fieldset>
        <Fieldset.Legend size="XL" isPageHeading>Select an address</Fieldset.Legend>
        <br/>
        <form action="">
          <FormGroup>
            <Select
              input={{
                name: 'address',
                onChange: onChange
              }}
              label="Select an address"
              meta={state.error}
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
          </FormGroup>
          <Link as={RouterLink} to="not-eligible">I can&apos;t find my address on this list</Link>
          <br/>
          <br/>
          <Button onClick={Continue} >Tell us where the problem is</Button>
        </form>
      </Fieldset>
    </GridCol>
  </GridRow>
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
