require('dotenv').config();

exports.options = {
  routePrefix: '/v1',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'ChallengeFlow',
      description: 'ChallengeFlow API documentation',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    host: `localhost:${process.env.PORT}`,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
};
