const controllers = require('../controllers/controllers');

const routes = [
  {
    method: 'GET',
    url: '/v1/location',
    handler: controllers.getLocation,
  },
  {
    method: 'GET',
    url: '/v1/current/:city',
    handler: controllers.getCurrent,
  },
  {
    method: 'GET',
    url: '/v1/forecast/:city',
    handler: controllers.getForecast,
  },
];

module.exports = routes;
