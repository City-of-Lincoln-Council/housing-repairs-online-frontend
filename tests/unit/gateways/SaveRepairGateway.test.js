describe('SaveRepairGateway', () => {
  const repairLocation = 'Kitchen'
  const repairProblem = 'Cupboards, including damaged cupboard doors'
  const repairIssue = 'Missing door'
  const locationId = '100023336956'
  const dummyID = 'ABCD1234';

  let mockPostRequest;
  let SaveRepairGateway;

  beforeAll(() => {
    mockPostRequest =  jest.fn().mockImplementation(({url, params}) => Promise.resolve({data: dummyID}));
    SaveRepairGateway = require('../../../api/gateways/SaveRepairGateway')(mockPostRequest);
  });

  test('api gets called appropriately', async () => {
    const result = await SaveRepairGateway({
      repairLocation,
      repairProblem,
      repairIssue,
      locationId
    });

    expect(mockPostRequest).toHaveBeenCalledWith(
      {
        uri:  '/repair',
        body: {
          repairIssue: repairIssue,
          repairLocation: repairLocation,
          repairProblem: repairProblem,
          locationId: locationId
        }
      }
    )
    expect(result).toEqual(dummyID)
  });

  describe('when api is down', () =>{
    beforeAll(() => {
      mockPostRequest =  jest.fn().mockRejectedValue({status: 500});
      SaveRepairGateway = require('../../../api/gateways/SaveRepairGateway')(mockPostRequest);
    });

    test('an error gets raised', async () => {
      await SaveRepairGateway({
        repairLocation,
        repairProblem,
        repairIssue,
        locationId
      }).then((res)=>{
        expect(res).toEqual(Error('Error saving'));
      });
    })
  });
});
