const {SearchPropertiesGateway} = require('../../../api/gateways');
jest.mock('axios');

import axios from 'axios';

describe('SearchProperties', () => {
  let mockedGet;
  const api_url = 'https://repairs.api'
  const api_identifier = 'magic key'
  const postcode = 'M3 0W'
  let mockedPost;
  let mockedAxiosInstance;
  const dummyData = {postcode: postcode}
  const jwt = '~~~jwt~~~'

  beforeAll(() => {
    process.env.REPAIRS_API = api_url
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
    await SearchPropertiesGateway(postcode);

    expect(axios.create).toHaveBeenCalledWith(
      {'baseURL': api_url}
    )
  });

  test('api gets called appropriately', async () => {
    const result = await SearchPropertiesGateway(postcode);

    expect(mockedPost).toHaveBeenCalledWith(
      `/authentication?identifier=${api_identifier}`
    )

    expect(mockedAxiosInstance.defaults.headers.common['Authorization']).toEqual(`Bearer ${jwt}`);

    expect(mockedGet).toHaveBeenCalledWith(
      `/addresses?postcode=${postcode}`
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
      await SearchPropertiesGateway(postcode).then((res)=>{
        expect(res).toEqual(Error('Error searching'));
      });
    })
  });
});
