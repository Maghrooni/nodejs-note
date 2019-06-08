import should = require('should');
import {configs, environments, itemStatuses, statusCodes} from '../config';
import request = require('supertest');
import app from '../server';
import {testDBConnection} from "./helpers";
import userConfigs from "../config/user.config";

configs.environment = environments.test;

describe('User Crud', function () {
    testDBConnection();
    it('registerANewUser', function (done) {
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

    it('updateUserData', function (done) {
        request(app)
            .post('/users/login')
            .send({
                username: 'maghrooni',
                password: 123456
            })
            .expect(statusCodes.ok)
            .end((err, response) => {
                if (err) {
                    return done(err);
                }
                should(response.body._id).be.a.String();
                should(response.headers[userConfigs.auth.header]).be.a.String();
                request(app)
                    .put(`/users/${response.body._id}`)
                    .send({
                        username: 'maghrooniupdated',
                    })
                    .set(userConfigs.auth.header, response.headers[userConfigs.auth.header])
                    .expect(statusCodes.ok)
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

    it('loginUserWithValidData', function (done) {
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
                should(response.body.username).equal('maghrooni');
                done();
            });
    });

    it('dontAllowInvalidLoginCredentials', function (done) {
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

    it('dontAllowInvalidLoginCredentials', function (done) {
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
});
describe('User View', function () {
    testDBConnection();
    it('registerANewUser', function (done) {
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
    it('userProfileViewWithUsername', function (done) {
        request(app)
            .get('/users/profile/maghrooni')
            .expect(statusCodes.ok)
            .end(function (err, response) {
                if (err) {
                    return done(err);
                }
                should(response.body.username).equal('maghrooni');
                done();
            });
    });

    it('shownUserInformationExcludesPasswordOnProfile', function (done) {
        request(app)
            .get('/users/profile/maghrooni')
            .expect(statusCodes.ok)
            .end(function (err, response) {
                if (err) {
                    return done(err);
                }
                should(response.password).be.undefined();
                done();
            });
    });

    it('shownUserInformationExcludesPasswordOnAll', function (done) {
        request(app)
            .get('/users')
            .expect(statusCodes.ok)
            .end(function (err, response) {
                if (err) {
                    return done(err);
                }
                should(response.password).be.undefined();
                done();
            });
    });

    it('invalidUserProfileView', function (done) {
        request(app)
            .get('/users/profile/maghrooni22')
            .expect(statusCodes.notFound)
            .end(function (err, response) {
                if (err) {
                    return done(err);
                }
                done();
            });
    });

    it('setStatusToInactiveAndCheckProfileIsNotShown', function (done) {
        request(app)
            .post('/users')
            .send({
                name: 'inactiveUser',
                username: 'username',
                email: 'someemail@gmail.com',
                password: 123456,
                status: itemStatuses.inactive
            })
            .expect(statusCodes.ok)
            .end(function (err, response) {
                if (err) {
                    return done(err);
                }
                request(app)
                    .get('/users/profile/username')
                    .expect(statusCodes.notFound)
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
    testDBConnection();
    it('registerANewUser', function (done) {
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
    it('requiredFieldsCheckOnRegistration', function (done) {
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

    it('uniqueValidationCheckOnRegistration', function (done) {
        request(app)
            .post('/users')
            .send({
                name: 'Mehdi',
                username: 'maghrooni',
                email: 'maghrooni@gmail.com',
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

    it('emailValidationCheckOnRegistration', function (done) {
        request(app)
            .post('/users')
            .send({
                name: 'Mehdi',
                username: 'maghrooni1',
                email: 'maghrooni1@',
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

    it('passwordValidationCheckOnRegistration', function (done) {
        request(app)
            .post('/users')
            .send({
                name: 'Mehdi',
                username: 'maghrooni2',
                email: 'maghrooni2@gmail.com',
                password: 'in'
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