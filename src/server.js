const server = require('./app')({
  logger: {
    level: 'info',
    transport: {
      target: 'pino-pretty',
    },
  },
});
// eslint-disable-next-line import/newline-after-import
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await server.listen(PORT);
    server.log.info(`server listening on ${server.server.address().port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
