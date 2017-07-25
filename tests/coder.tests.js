const app = require('../lib/app');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

describe('get details', () => {
  const req = chai.request(app);

  it('my info', () => {
    req
      .get('/coder')
      .query({
        name : 'wbeck32',
        since : '1996'
      })
      .then(res => {
        assert(res.text, 'wbeck32 1996');
      });
  }), it('generic greeting', () => {
    req.get('/generic').then(res => {
      assert(res.text, '<p>Hello World</p>');
    });
  });
});
