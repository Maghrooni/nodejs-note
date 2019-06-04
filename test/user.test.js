"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const dbConnection_1 = require("../dbConnection");
const request = require("supertest");
const server_1 = require("../server");
config_1.configs.environment = config_1.environments.test;
describe('UserRegistration', function () {
    before('cleanup database', function (done) {
        dbConnection_1.testDbConnect(done);
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
            .expect(200)
            .end(function (err, response) {
            if (err) {
                return done(err);
            }
            done();
        });
    });
});
//# sourceMappingURL=user.test.js.map