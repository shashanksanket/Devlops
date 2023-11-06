const assert = require('assert');
const app = require('../../src/app');

describe('\'opconfigs\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/opconfigs');

    assert.ok(service, 'Registered the service');
  });
});
