"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const should = require("should");
const config_1 = require("../config");
const request = require("supertest");
const server_1 = require("../server");
const helpers_1 = require("./helpers");
config_1.configs.environment = config_1.environments.test;
describe('User Crud', function () {
    helpers_1.testDBConnection();
    it('registerANewUser', function (done) {
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
    it('updateUserData', function (done) {
        request(server_1.default)
            .get('/users/maghrooni')
            .expect(200 /* ok */)
            .end((err, response) => {
            if (err) {
                return done(err);
            }
            should(response.body._id).be.a.String();
            request(server_1.default)
                .put(`/users/${response.body._id}`)
                .send({
                username: 'maghrooniupdated',
            })
                .expect(200 /* ok */)
                .end((err, response) => {
                if (err) {
                    return done(err);
                }
                done();
            });
        });
    });
    it('removeAUser', function (done) {
        done();
    });
});
describe('User Login', function () {
    it('registerANewUser', function (done) {
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
    it('loginUserWithValidData', function (done) {
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
            should(response.body.username).equal('maghrooni');
            done();
        });
    });
    it('dontAllowInvalidLoginCredentials', function (done) {
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
    it('dontAllowInvalidLoginCredentials', function (done) {
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
});
describe('User View', function () {
    helpers_1.testDBConnection();
    it('registerANewUser', function (done) {
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
    it('userProfileViewWithUsername', function (done) {
        request(server_1.default)
            .get('/users/maghrooni')
            .expect(200 /* ok */)
            .end(function (err, response) {
            if (err) {
                return done(err);
            }
            should(response.body.username).equal('maghrooni');
            done();
        });
    });
    it('shownUserInformationExcludesPasswordOnProfile', function (done) {
        request(server_1.default)
            .get('/users/maghrooni')
            .expect(200 /* ok */)
            .end(function (err, response) {
            if (err) {
                return done(err);
            }
            should(response.password).be.undefined();
            done();
        });
    });
    it('shownUserInformationExcludesPasswordOnAll', function (done) {
        request(server_1.default)
            .get('/users')
            .expect(200 /* ok */)
            .end(function (err, response) {
            if (err) {
                return done(err);
            }
            should(response.password).be.undefined();
            done();
        });
    });
    it('invalidUserProfileView', function (done) {
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
    it('setStatusToInactiveAndCheckProfileIsNotShown', function (done) {
        request(server_1.default)
            .post('/users')
            .send({
            name: 'inactiveUser',
            username: 'username',
            email: 'someemail@gmail.com',
            password: 123456,
            status: 2 /* inactive */
        })
            .expect(200 /* ok */)
            .end(function (err, response) {
            if (err) {
                return done(err);
            }
            request(server_1.default)
                .get('/users/username')
                .expect(404 /* notFound */)
                .end(function (err, response) {
                if (err) {
                    return done(err);
                }
                done();
            });
        });
    });
});
describe('User Validation', function () {
    helpers_1.testDBConnection();
    it('registerANewUser', function (done) {
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
    it('requiredFieldsCheckOnRegistration', function (done) {
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
    it('uniqueValidationCheckOnRegistration', function (done) {
        request(server_1.default)
            .post('/users')
            .send({
            name: 'Mehdi',
            username: 'maghrooni',
            email: 'maghrooni@gmail.com',
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
    it('emailValidationCheckOnRegistration', function (done) {
        request(server_1.default)
            .post('/users')
            .send({
            name: 'Mehdi',
            username: 'maghrooni1',
            email: 'maghrooni1@',
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
    it('passwordValidationCheckOnRegistration', function (done) {
        request(server_1.default)
            .post('/users')
            .send({
            name: 'Mehdi',
            username: 'maghrooni2',
            email: 'maghrooni2@gmail.com',
            password: 'in'
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