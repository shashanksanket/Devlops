// Initializes the `users` service on path `/api/users`
const { Users } = require('./users.class');
const createModel = require('../../models/users.model');
const hooks = require('./users.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/users', new Users(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('/api/users');

  service.hooks(hooks);
  
  service.publish("created", function (data, connection) {
    // eslint-disable-next-line no-console
    console.log("publish created", data);
  });
};
