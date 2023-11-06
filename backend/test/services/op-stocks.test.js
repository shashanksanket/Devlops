const assert = require('assert');
const app = require('../../src/app');

describe('\'opStocks\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/opStocks');

    assert.ok(service, 'Registered the service');
  });
});
