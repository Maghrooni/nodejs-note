import should = require('should');
import {configs, environments} from '../config';
import {testDbConnect} from "../dbConnection";
import request = require('supertest');
import app from '../server';

configs.environment = environments.test;

describe('UserRegistration', function () {
    before('cleanup database', function (done) {
        testDbConnect(done);
    });

    it('normalRegistration', function (done) {
        request(app)
            .post('/users')
            .send({
                name: 'Mehdi',
                username: 'maghrooni',
                email: 'maghrooni@gmail.com',
                password: 123456
            })
            .expect(200)
            .end(function (err, response) {
                if (err) {
                    return done(err);
                }
                done();
            });
    });
});