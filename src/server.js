// const fastify = require('fastify')({ logger: true });
const fastify = require('./app');
// const swagger = require('./utils/swagger');
// const Rutes = require('./routes/routes');

// fastify.register(require('fastify-swagger'), swagger.options);
// fastify.register(require('./routes/routes'), { prefix: '/v1' })
// Rutes.forEach((route) => {
// fastify.route(route);
// });

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
