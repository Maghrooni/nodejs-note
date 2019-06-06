import should = require('should');
import {configs, environments, itemStatuses, statusCodes} from '../config';
import {testDbConnect} from "../dbConnection";
import request = require('supertest');
import app from '../server';
import {noteTypes} from "../config/note";

const mongoose = require('mongoose');


configs.environment = environments.test;

describe('NoteCrud', function () {
    before('cleanup database', function (done) {
        testDbConnect(done, true);
    });
    after('cleanup database', function (done) {
        testDbConnect(done, true);
    });

    it('addANewNote', function (done) {
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
                should(response.body._id).be.a.String();
                request(app)
                    .post(`/notes/${response.body._id}`)
                    .send({
                        title: 'New Note',
                        tags: ['some', 'tag'],
                        color: '#ffff',
                        type: noteTypes.personal
                    })
                    .expect(statusCodes.ok)
                    .end(function (err, response) {
                        if (err) {
                            return done(err);
                        }
                        done();
                    });
            });
    });

    it('checkAddingNoteWithoutRequiredFields', function (done) {
        request(app)
            .get('/users/maghrooni')
            .expect(statusCodes.ok)
            .expect(function (res) {
                should(res.body._id).be.String();
            })
            .end(function (err, response) {
                if (err) {
                    return done(err);
                }
                should(response.body._id).be.a.String();
                request(app)
                    .post(`/notes/${response.body._id}`)
                    .send({
                        tags: ['some', 'tag'],
                        color: '#ffff',
                        type: noteTypes.personal
                    })
                    .expect(statusCodes.serverError)
                    .end(function (err, response) {
                        if (err) {
                            return done(err);
                        }
                        done();
                    });
            });
    });

    it('checkAddingNoteWithInvalidUserID', function (done) {
        request(app)
            .post(`/notes/invaliduserid`)
            .send({
                title: 'New Note',
                tags: ['some', 'tag'],
                color: '#ffff',
                type: noteTypes.personal
            })
            .expect(statusCodes.serverError)
            .end(function (err, response) {
                if (err) {
                    return done(err);
                }
                done();
            });
    });

    it('checkAddingNoteWithValidNotExistedUserID', function (done) {
        let notExistedUserId = mongoose.Types.ObjectId();
        request(app)
            .post(`/notes/${notExistedUserId}`)
            .send({
                title: 'New Note',
                tags: ['some', 'tag'],
                color: '#ffff',
                type: noteTypes.personal
            })
            .expect(statusCodes.serverError)
            .end(function (err, response) {
                if (err) {
                    return done(err);
                }
                done();
            });
    });

    it('viewUserNotes', function (done) {
        done();
    });

    it('checkInactiveUserNoteIsNotVisible', function (done) {
        done();
    });

    it('checkInvalidUserNotes', function (done) {
        done();
    });

    it('updateANote', function (done) {
        done();
    });

    it('checkRemovingUserRemovesItsNotes', function (done) {
        done();
    });


    it('removeANote', function (done) {
        done();
    });

});