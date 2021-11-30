module.exports = async function (context, req) {

  context.log('JavaScript HTTP trigger function processed a request.');

  context.res = {
    body: [
      {
        'id': 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        'startTime': '2017-07-21T12:00:00Z',
        'endTime': '2017-07-21T17:00:00Z'
      },
      {
        'id': '8d1762b9-f6e7-43c5-86c2-778bacb602e2',
        'startTime': '2017-07-22T09:00:00Z',
        'endTime': '2017-07-22T12:00:00Z'
      },
      {
        'id': 'b596d313-2b39-43ad-a76a-3b824eb56daf',
        'startTime': '2017-07-22T12:00:00Z',
        'endTime': '2017-07-22T17:00:00Z'
      },
      {
        'id': 'f55321af-1046-42a3-b723-2f3676447a22',
        'startTime': '2017-07-23T09:00:00Z',
        'endTime': '2017-07-23T12:00:00Z'
      },
      {
        'id': '8d1762b9-f6e7-43c5-86c2-778bacb602e2',
        'startTime': '2017-07-24T09:00:00Z',
        'endTime': '2017-07-24T12:00:00Z'
      },
      {
        'id': 'b596d313-2b39-43ad-a76a-3b824eb56daf',
        'startTime': '2017-07-24T12:00:00Z',
        'endTime': '2017-07-24T17:00:00Z'
      },
    ]
  };
};
