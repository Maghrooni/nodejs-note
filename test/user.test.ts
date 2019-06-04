import should = require('should');
import {configs, environments, statusCodes} from '../config';
import {testDbConnect} from "../dbConnection";
import request = require('supertest');
import app from '../server';

configs.environment = environments.test;

describe('UserRegistration', function () {
    before('cleanup database', function (done) {
        testDbConnect(done, true);
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
            .expect(statusCodes.ok)
            .end(function (err, response) {
                if (err) {
                    return done(err);
                }
                done();
            });
    });

    it('normalLogin', function (done) {
        request(app)
            .post('/users/login')
            .send({
                username: 'maghrooni',
                password: 123456
            })
            .expect(statusCodes.ok)
            .end(function (err, response) {
                if (err) {
                    return done(err);
                }
                done();
            });
    });

    it('profileView', function (done) {
        request(app)
            .get('/users/maghrooni')
            .expect(statusCodes.ok)
            .end(function (err, response) {
                if (err) {
                    return done(err);
                }
                done();
            });
    });

    it('incorrectProfileView', function (done) {
        request(app)
            .get('/users/maghrooni22')
            .expect(statusCodes.notFound)
            .end(function (err, response) {
                if (err) {
                    return done(err);
                }
                done();
            });
    });

    it('incorrectLogin', function (done) {
        request(app)
            .post('/users/login')
            .send({
                username: 'maghrooni',
                password: 333333
            })
            .expect(statusCodes.unauthorized)
            .end(function (err, response) {
                if (err) {
                    return done(err);
                }
                done();
            });
    });

    it('incompleteRegistration', function (done) {
        request(app)
            .post('/users')
            .send({
                name: 'Mehdi',
                password: 123456
            })
            .expect(statusCodes.validationError)
            .end(function (err, response) {
                if (err) {
                    return done(err);
                }
                done();
            });
    });

});