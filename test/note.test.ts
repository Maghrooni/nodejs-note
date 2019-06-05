import should = require('should');
import {configs, environments, itemStatuses, statusCodes} from '../config';
import {testDbConnect} from "../dbConnection";
import request = require('supertest');
import app from '../server';
import {noteTypes} from "../config/note";

configs.environment = environments.test;

describe('NoteCrud', function () {
    before('cleanup database', function (done) {
        testDbConnect(done, true);
    });

    it('addANewNote', function (done) {

        request(app)
            .post('/users')
            .send({
                title: 'Mehdi',
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
                    .post('/notes')
                    .send({
                        title: 'New Note',
                        userId: response.body._id,
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

    });

    it('viewUserNotes', function (done) {

    });

    it('checkInactiveUserNoteIsNotVisible', function (done) {

    });

    it('checkInvalidUserNotes', function (done) {

    });

    it('updateANote', function (done) {

    });

    it('checkRemovingUserRemovesItsNotes', function (done) {

    });


    it('removeANote', function (done) {

    });

});