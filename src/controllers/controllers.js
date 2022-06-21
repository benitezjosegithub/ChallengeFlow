const fastify = require('fastify');
const searchdata = require('./controller.searchdata');

const getLocation = async (req, res) => {
  try {
    const data = await searchdata.getCurrentLocation(req.headers['x-forwarded-for']);
    res.send(data);
  } catch (err) {
    fastify.log.error(err);
  }
};

const getCurrent = async (req, res) => {
  try {
    const { city } = req.params;
    if (city) {
      const location = await searchdata.getDataLocation(city);
      const data = await searchdata.getWeatherByCityLocationData(
        city,
        'weather',
      );
      delete data.coord;
      const response = {
        location,
        Weather: data,
      };
      res.send(response);
    } else {
      const location = await searchdata.getCurrentLocation(req.headers['x-forwarded-for']);
      const data = await searchdata.getWeatherByCurrentLocation(
        location.lat,
        location.lon,
        'weather',
      );
      delete data.coord;
      const response = {
        location,
        Weather: data,
      };
      res.send(response);
    }
  } catch (err) {
    fastify.log.error(err);
  }
};

const getForecast = async (req, res) => {
  try {
    const { city } = req.params;
    if (city) {
      const location = await searchdata.getDataLocation(city);
      const data = await searchdata.getWeatherByCityLocationData(
        city,
        'forecast',
      );
      const response = {
        location,
        Weather: {
          list: data.list,
        },
      };
      res.send(response);
    } else {
      const location = await searchdata.getCurrentLocation(req.headers['x-forwarded-for']);
      const data = await searchdata.getWeatherByCurrentLocation(
        location.lat,
        location.lon,
        'forecast',
      );
      const response = {
        location,
        Weather: {
          list: data.list,
        },
      };
      res.send(response);
    }
  } catch (err) {
    fastify.log.error(err);
  }
};

module.exports = {
  getLocation,
  getCurrent,
  getForecast,
};
