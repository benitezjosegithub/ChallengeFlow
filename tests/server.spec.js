const { test } = require('tap');
const build = require('../src/app');

test('requests the "/v1/location" route', async (t) => {
  const app = build();

  const response = await app.inject({
    method: 'GET',
    url: '/v1/location',
  });
  t.equal(response.statusCode, 200, 'returns a status code of 200');
});

test('requests the "/v1/current/" route', async (t) => {
  const app = build();

  const response = await app.inject({
    method: 'GET',
    url: '/v1/current/',
  });
  t.equal(response.statusCode, 200, 'returns a status code of 200');
});

test('requests the "/v1/current/buenos aires" route', async (t) => {
  const app = build();

  const response = await app.inject({
    method: 'GET',
    url: '/v1/current/buenos aires',
  });
  t.equal(response.statusCode, 200, 'returns a status code of 200');
});

test('requests the "/v1/forecast/" route', async (t) => {
  const app = build();

  const response = await app.inject({
    method: 'GET',
    url: '/v1/forecast/',
  });
  t.equal(response.statusCode, 200, 'returns a status code of 200');
});

test('requests the "/v1/forecast/buenos aires" route', async (t) => {
  const app = build();

  const response = await app.inject({
    method: 'GET',
    url: '/v1/forecast/buenos aires',
  });
  t.equal(response.statusCode, 200, 'returns a status code of 200');
});

test('requests the "/v1/current/algunlugar" route', async (t) => {
  const app = build();

  const response = await app.inject({
    method: 'GET',
    url: '/v1/current/algunlugar',
  });
  t.equal(response.statusCode, 500, 'returns a status code of 500');
});

test('requests the "/v1/forecast/algunlugar" route', async (t) => {
  const app = build();

  const response = await app.inject({
    method: 'GET',
    url: '/v1/forecast/algunlugar',
  });
  t.equal(response.statusCode, 500, 'returns a status code of 500');
});
