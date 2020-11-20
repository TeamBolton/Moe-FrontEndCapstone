const request = require('supertest');
const app = require('../app.js')

//get request to '/'
describe('GET /', function () {
  it('respond with status 200', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

//get request
describe('GET /api/products/review', function () {
  it('respond with json', function (done) {
    request(app)
      .get('/api/products/review')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

//post request
describe('POST /api/products/review', function () {
  it('respond with a status 200', function (done) {
    request(app)
      .post('/api/products/review')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});