'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const jwt = require('jsonwebtoken');
//const bcrypt = require('bcrypt');
const request = require('supertest');
const knex = require('../knex');
const app = require('../app');

suite('routes/token', () => {
  before((done) => {
    knex.migrate.latest()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  beforeEach((done) => {
    knex.seed.run()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('POST /token when user does not exist', (done) => {

    request(app)
      .post('/token')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        email: 'non-existent@example.com',
        password: 'incorrect'
      })
      .expect(400, 'Bad email or password')
      .end((httpErr, _res) => {
        if (httpErr) {
          return done(httpErr);
        }

        done();
      });
  });

  test('POST /token when user does exist', (done) => {

    request(app)
      .post('/token')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        email: 'testemail@gmail.com',
        password: 'password'
      })
      .expect(200, { id: 1, email: 'testemail@gmail.com' })
      .expect('set-cookie', /token=[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+; Path=\/;.+HttpOnly/)
      .expect('Content-Type', /json/)
      .end((httpErr, res) => {
        if (httpErr) {
          return done(httpErr);
        }

        const cookieValue = res.headers['set-cookie'][0];
        const tokenValue = cookieValue.match(/token=([a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+);/)[1];

        jwt.verify(tokenValue, 'itsasecret', (err, decoded) => {
          if (err) {
            done(err);
          } else {
            delete decoded.iat;
            assert.deepEqual(decoded, { userId: 1});
            done();
          }
        });
      });
  });

  test('POST /token when user does exist but password is wrong', (done) => {

    request(app)
      .post('/token')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        email: 'testemail@gmail.com',
        password: 'incorrect'
      })
      .expect(400, 'Bad email or password')
      .end((httpErr, _res) => {
        if (httpErr) {
          return done(httpErr);
        }

        done();
      });
  });



})
