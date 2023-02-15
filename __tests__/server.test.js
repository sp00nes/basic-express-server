'use strict';

const { app } = require('../src/server.js');
const supertest =  require('supertest');
const apiReq = supertest(app);

describe('API server', () => {
  test('handles invalid requests', async() => {
    const response = await apiReq.get('/notAPath');
    expect(response.status).toEqual(404);
  });
  test('handles invalid methods', async() => {
    const response = await apiReq.post('/person');
    expect(response.status).toEqual(404);
  });
  test('handles invalid query', async() => {
    const response = await apiReq.get('/person?notAQuery');
    expect(response.status).toEqual(500);
  });
  test('handles not having a name in query', async() => {
    const response = await apiReq.get('/person?name=');
    expect(response.status).toEqual(500);
  });
  test('handles valid query', async() => {
    const response = await apiReq.get('/person?name=martin');
    expect(response.status).toEqual(200);
  });
  test('handles response', async() => {
    const response = await apiReq.get('/person?name=Martin');
    console.log(response);
    expect(response._body).toEqual({name:'Martin'});
  });
});
