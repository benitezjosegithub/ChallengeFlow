const fastify = require('fastify')({ logger: true });
// const swagger = require('./utils/swagger');
const Rutes = require('./routes/routes');

// fastify.register(require('fastify-swagger'), swagger.options);
// fastify.register(require('./routes/routes'), { prefix: '/v1' })
Rutes.forEach((route) => {
  fastify.route(route);
});
// fastify.get('/', async (request, reply) => {
//   reply.send({ hello: 'world' });
// });

module.exports = fastify;
