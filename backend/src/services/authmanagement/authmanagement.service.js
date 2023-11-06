// Initializes the `authmanagement` service on path `/api/v1/authmanagement`
const authManagement = require('feathers-authentication-management');
const hooks = require('./authmanagement.hooks');
module.exports = function (app) {
  
  console.log("Configuring auth management");
  app.configure(authManagement({
    path: '/api/authmanagement',
    service: '/api/users',
  }));

  
  // Get our initialized service so that we can register hooks
  const service = app.service('api/authmanagement');

  service.hooks(hooks);
};
