"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const dbConnection_1 = require("../dbConnection");
const request = require("supertest");
const server_1 = require("../server");
config_1.configs.environment = config_1.environments.test;
describe('UserRegistration', function () {
    before('cleanup database', function (done) {
        dbConnection_1.testDbConnect(done, true);
    });
    it('normalRegistration', function (done) {
        request(server_1.default)
            .post('/users')
            .send({
            name: 'Mehdi',
            username: 'maghrooni',
            email: 'maghrooni@gmail.com',
            password: 123456
        })
            .expect(200 /* ok */)
            .end(function (err, response) {
            if (err) {
                return done(err);
            }
            done();
        });
    });
    it('normalLogin', function (done) {
        request(server_1.default)
            .post('/users/login')
            .send({
            username: 'maghrooni',
            password: 123456
        })
            .expect(200 /* ok */)
            .end(function (err, response) {
            if (err) {
                return done(err);
            }
            done();
        });
    });
    it('profileView', function (done) {
        request(server_1.default)
            .get('/users/maghrooni')
            .expect(200 /* ok */)
            .end(function (err, response) {
            if (err) {
                return done(err);
            }
            done();
        });
    });
    it('incorrectProfileView', function (done) {
        request(server_1.default)
            .get('/users/maghrooni22')
            .expect(404 /* notFound */)
            .end(function (err, response) {
            if (err) {
                return done(err);
            }
            done();
        });
    });
    it('incorrectLogin', function (done) {
        request(server_1.default)
            .post('/users/login')
            .send({
            username: 'maghrooni',
            password: 333333
        })
            .expect(401 /* unauthorized */)
            .end(function (err, response) {
            if (err) {
                return done(err);
            }
            done();
        });
    });
    it('incompleteRegistration', function (done) {
        request(server_1.default)
            .post('/users')
            .send({
            name: 'Mehdi',
            password: 123456
        })
            .expect(400 /* validationError */)
            .end(function (err, response) {
            if (err) {
                return done(err);
            }
            done();
        });
    });
});
//# sourceMappingURL=user.test.js.map