require('dotenv').config();

const getFetch = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getWeatherByCurrentLocation = async (lat, lon, option) => {
  const url = `https://api.openweathermap.org/data/2.5/${option}?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}`;
  const data = await getFetch(url);
  return data;
};

const getWeatherByCityLocationData = async (city, option) => {
  const url = `https://api.openweathermap.org/data/2.5/${option}?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}`;
  const data = await getFetch(url);
  return data;
};

const getCurrentLocation = async (ip) => {
  //const ip = await getFetch('https://api.ipify.org?format=json');
  const data = await getFetch(`http://ip-api.com/json/${ip}`);
  const response = {
    country: data.country,
    countryCode: data.countryCode,
    region: data.region,
    regionName: data.regionName,
    city: data.city,
    zip: data.zip,
    lat: data.lat,
    lon: data.lon,
  };
  return response;
};

const getDataLocation = async (city) => {
  const location = await getFetch(
    `http://api.positionstack.com/v1/forward?access_key=${process.env.POSITIONSTACK_API_KEY}&query=${city}`,
  );
  const response = {
    country: location.data[0].country,
    countryCode: location.data[0].country_code,
    region: location.data[0].region_code,
    regionName: location.data[0].region,
    city: location.data[0].name,
    zip: location.data[0].postal_code,
    lat: location.data[0].latitude,
    lon: location.data[0].longitude,
  };
  return response;
};

module.exports = {
  getWeatherByCurrentLocation,
  getWeatherByCityLocationData,
  getCurrentLocation,
  getDataLocation,
};
