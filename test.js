const request = require('supertest');
const express = require('express');
const assert = require('assert');

const noRobots = require('./index.js');
 
const app = express();

app.use(noRobots);

app.get('/', function(req, res) {
  res.status(200).json({ hello: 'world' });
}); 

describe('Tests', () => {
  it('should allow normal routing', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err) {
        done(err);
      });
  });
  it('should disallow robots', (done) => {
    request(app)
      .get('/robots.txt')
      .expect('Content-Type', 'text/plain; charset=utf-8')
      .expect(200)
      .end(function(err, res) {
        assert.equal(res.text, "User-agent: *\nDisallow: /");
        done(err);
      });
  });
});
