const {AvailableAppointmentsGateway} = require('../../../api/gateways');
import dummyData from '../../fixtures/availableAppointments.json'

jest.mock('axios');

import axios from 'axios';

describe('SearchProperties', () => {
  let mockedGet;
  const api_url = 'https://repairs.api'
  const api_identifier = 'magic key'
  const repairLocation = 'Kitchen'
  const repairProblem = 'Cupboards, including damaged cupboard doors'
  const repairIssue = 'Missing door'
  const locationId = '100023336956'
  let mockedPost;
  let mockedAxiosInstance;
  const dummyData = dummyData;
  const jwt = '~~~jwt~~~';

  beforeAll(() => {
    process.env.REPAIRS_API_BASE_URL = api_url
    process.env.REPAIRS_API_IDENTIFIER = api_identifier

    mockedPost = jest.fn().mockImplementation(() => Promise.resolve({data: jwt}));
    mockedGet = jest.fn().mockImplementation(() => Promise.resolve({data: dummyData}));
    mockedAxiosInstance = {
      post: mockedPost,
      get: mockedGet,
      defaults: {
        headers: {
          common: {}
        }
      }
    }

    axios.create = jest.fn(()=>{
      return mockedAxiosInstance
    })
  });

  test('axios gets instantiated with the api url', async () => {
    await AvailableAppointmentsGateway({
      repairLocation,
      repairProblem,
      repairIssue,
      locationId
    });

    expect(axios.create).toHaveBeenCalledWith(
      {'baseURL': api_url}
    )
  });

  test('api gets called appropriately', async () => {
    const result = await AvailableAppointmentsGateway({
      repairLocation,
      repairProblem,
      repairIssue,
      locationId
    });

    expect(mockedPost).toHaveBeenCalledWith(
      `/authentication?identifier=${api_identifier}`
    )

    expect(mockedAxiosInstance.defaults.headers.common['Authorization']).toEqual(`Bearer ${jwt}`);

    expect(mockedGet).toHaveBeenCalledWith(
      '/Appointments/AvailableAppointments', {
        params: {
          repairIssue: repairIssue,
          repairLocation: repairLocation,
          repairProblem: repairProblem,
          locationId: locationId
        }
      }
    )
    expect(result).toEqual(dummyData)
  });

  describe('when api is down', () =>{
    beforeEach(()=>{
      axios.create = jest.fn(()=>{
        return {
          post: jest.fn().mockRejectedValue({status: 500})
        }
      })
    })
    test('an error gets raised', async () => {
      await AvailableAppointmentsGateway({
        repairLocation,
        repairProblem,
        repairIssue,
        locationId
      }).then((res)=>{
        expect(res).toEqual(Error('Error searching'));
      });
    })
  });
});
