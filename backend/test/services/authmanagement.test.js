const assert = require('assert');
const app = require('../../src/app');

describe('\'authmanagement\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/authmanagement');

    assert.ok(service, 'Registered the service');
  });
});
