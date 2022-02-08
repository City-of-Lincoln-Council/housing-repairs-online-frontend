describe('SearchProperties', () => {
  const postcode = 'M3 0W'
  const dummyData = {postcode: postcode}
  let SearchPropertiesGateway;
  let mockGetRequest;

  let mockSentry;
  let mockCaptureException;


  describe('when api is up', () => {
    beforeAll(() => {
      mockGetRequest =  jest.fn().mockImplementation(({url, params}) => Promise.resolve({data: dummyData}));
      SearchPropertiesGateway = require('../../../api/gateways/SearchPropertiesGateway')(mockGetRequest);
    });

    test('api gets called appropriately', async () => {
      const result = await SearchPropertiesGateway(postcode);

      expect(mockGetRequest).toHaveBeenCalledWith(
        {uri: `/addresses?postcode=${postcode}`}
      )

      expect(result).toEqual(dummyData)
    });
  });

  describe('when api is down', () =>{
    beforeAll(()=>{
      mockGetRequest = jest.fn().mockRejectedValue({status: 500});
      mockCaptureException = jest.fn();
      mockSentry = {captureException: mockCaptureException, flush: jest.fn()};
      SearchPropertiesGateway = require('../../../api/gateways/SearchPropertiesGateway')(mockGetRequest, mockSentry);
    })
    test('an error gets raised', async () => {
      await SearchPropertiesGateway(postcode).then((res)=>{
        expect(res).toEqual(Error('Error searching'));
      });
    })
  });
});
