const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const { expressOauth } = require('@feathersjs/authentication-oauth');
const { FeathersError } = require('@feathersjs/errors');

module.exports = app => {
  const authentication = new AuthenticationService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());

  app.use('/api/authentication', authentication);
  app.configure(expressOauth());
  app.service('/api/authentication').hooks({
    before: {
      create: [
        // authentication.hooks.authenticate(config.strategies)
      ],
      remove: [
        // authentication.hooks.authenticate('jwt')
      ]
    },
    after: {
      create: [

      ],
    }
  });
};
