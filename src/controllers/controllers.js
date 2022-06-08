const fastify = require('fastify');
const searchdata = require('./controller.searchdata');

const getLocation = async (req, res) => {
  try {
    const data = await searchdata.getCurrentLocation();
    res.send(data);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
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
      const location = await searchdata.getCurrentLocation();
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
    process.exit(1);
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
      const location = await searchdata.getCurrentLocation();
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
    process.exit(1);
  }
};

module.exports = {
  getLocation,
  getCurrent,
  getForecast,
};
