'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
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

  test('POST /token', () => {
    const password = 'oatyoatyoats';

    request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        email: 'nonexist@user.com',
        password
      })
      .expect(400, 'Bad email or password')
      .end((httpErr, _res) => {
        done();
      });

  })



})
