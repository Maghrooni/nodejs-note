import should = require('should');
import {configs, environments, itemStatuses, statusCodes} from '../config';
import {testDbConnect} from "../dbConnection";
import request = require('supertest');
import app from '../server';

configs.environment = environments.test;

describe('UserCrud', function () {
    before('cleanup database', function (done) {
        testDbConnect(done, true);
    });

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

    // it('dontAllowRegisteringWithoutBodyData', function (done) {
    //     request(app)
    //         .post('/users')
    //         .expect(statusCodes.validationError)
    //         .end(function (err, response) {
    //             if (err) {
    //                 return done(err);
    //             }
    //             done();
    //         });
    // });

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

    it('userProfileViewWithUsername', function (done) {
        request(app)
            .get('/users/maghrooni')
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
            .get('/users/maghrooni')
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
            .get('/users/maghrooni22')
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
            });
        request(app)
            .get('/users/username')
            .expect(statusCodes.notFound)
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

    it('updateUserData', function (done) {
        request(app)
            .get('/users/maghrooni')
            .expect(statusCodes.ok)
            .end((err, response) => {
                if (err) {
                    return done(err);
                }
                should(response.body._id).be.a.String();
                request(app)
                    .put(`/users/${response.body._id}`)
                    .send({
                        username: 'maghrooniupdated',
                    })
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

    });

});