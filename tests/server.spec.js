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

// const request = require('supertest');
// const app = require('../src/server');

// eslint-disable-next-line no-undef
// describe('GET /v1/location', () => {
//   test('should return the location with a 200 status code', async () => {
//     const response = await fetch(app).get('/v1/location');
//     expect(response.statusCode).toBe(200);
//   });
// });

// describe('GET /v1/location', () => {

// test('should return the location with a 200 status code', async (t) => {
//   const testPort = 3000;
//   // process.env.PORT = testPort;
//   // const { server } = await require('../src/server');

//   const testServerAddress = `http://localhost:${testPort}/v1/location`;

//   await t.todo('blabla', async (t) => {
//     const response = await fetch(testServerAddress);
//     assert.strictEqual(response.status, 200, 'status code not equeal');
//     const result = await response.json();
//     // assert.ok(result.country, 'country not found');
//     assert.ok(result.lat != null, true, 'lat not found');
//     assert.ok(result.lon != null, true, 'lat not found');
//   });

// await promisify(server.close.bind(server))();

// app.start();
// const response = await fetch('http://localhost:3000/v1/location');
// assert.equal(response.status, 200, 'status code not equeal');
// });
// });

// test('example test', () => {
//   assert.equal(1, 1);
// });
// test('example object test', () => {
//   assert.deepEqual({ a: 1 }, { a: 1 }, 'Objects are not equeal');
// });
// test('debe devolver un statuscode 200 para /v1/location', async () => {
//   const response = await fetch('http://localhost:3000/v1/location');
//   assert.equal(response.status, 200, 'status code not equeal');
// });

// test('debe devolver un statuscode 200 para /v1/location', async () => {
//   const response = await fetch('http://localhost:3000');
//   assert.equal(response.status, 200, 'status code not equeal');
// });

// test('example object test', async () => {
//   const response = await fetch('http://localhost:3000/v1/location');
//   const res = await response.json();
//   // console.log(res);
//   assert.deepEqual(
//     res,
//     {
//       country: String,
//       countryCode: String,
//       region: String,
//       regionName: String,
//       city: String,
//       zip: String,
//       lat: Integer,
//       lon: Integer,
//     },
//     'Objects are not equeal',
//   );
// });

// test('debe devolver un statuscode 200 para /v1/current/city:buenos aires}', async () => {
//   const response = await fetch('http://localhost:3000/v1/current/buenos aires');
//   assert.equal(response.status, 200, 'status code not equeal');
// });

// test('debe devolver un statuscode 200 para /v1/current/ ', async () => {
//   const response = await fetch('http://localhost:3000/v1/current/');
//   assert.equal(response.status, 200, 'status code not equeal');
// });

// test('debe devolver un statuscode 200 para /v1/forecast/city:buenos aires} ', async () => {
//   const response = await fetch(
//     'http://localhost:3000/v1/forecast/buenos aires',
//   );
//   assert.equal(response.status, 200, 'status code not equeal');
// });

// test('debe devolver un statuscode 200 para /v1/forecast/ ', async () => {
//   const response = await fetch('http://localhost:3000/v1/forecast/');
//   assert.equal(response.status, 200, 'status code not equeal');
// });

//   expect(response.status).toBe(200);
// });

// test('should return the location with a 200 status code', async () => {
//   const res = await request(main).get('/v1/location').send();
//   expect(res.statusCode).toBe(200);
// });

// test('should return the current city and weather data with a status code of 200', async () => {
//   const res = await request(main).get('/v1/current/buenos aires').send();
//   expect(res.statusCode).toBe(200);
// });

// test('should return the current location and current weather data with a status code of 200',
// async () => {
//   const res = await request(main).get('/v1/current/').send();
//   expect(res.statusCode).toBe(200);
// });

// test('should return city and weather data to 5 days with a state code of 200', async () => {
//   const res = await request(main).get('/v1/forecast/buenos aires').send();
//   expect(res.statusCode).toBe(200);
// });

// test('should return current location data and 5-day weather with a status code of 200',
// async () => {
//   const res = await request(main).get('/v1/forecast/').send();
//   expect(res.statusCode).toBe(200);
// });
// });
