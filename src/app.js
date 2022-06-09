/* eslint-disable global-require */
const fastify = require('fastify');
const swagger = require('./utils/swagger');
const Rutes = require('./routes/routes');

function build(opts = {}) {
  const app = fastify(opts);
  app.register(require('fastify-swagger'), swagger.options);
  Rutes.forEach((route) => {
    app.route(route);
  });
  return app;
}

module.exports = build;
