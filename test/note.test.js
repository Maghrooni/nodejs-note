"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const should = require("should");
const config_1 = require("../config");
const dbConnection_1 = require("../dbConnection");
const request = require("supertest");
const server_1 = require("../server");
config_1.configs.environment = config_1.environments.test;
describe('NoteCrud', function () {
    before('cleanup database', function (done) {
        dbConnection_1.testDbConnect(done, true);
    });
    it('addANewNote', function (done) {
        request(server_1.default)
            .post('/users')
            .send({
            title: 'Mehdi',
            username: 'maghrooni',
            email: 'maghrooni@gmail.com',
            password: 123456
        })
            .expect(200 /* ok */)
            .end(function (err, response) {
            if (err) {
                return done(err);
            }
            should(response.body._id).be.a.String();
            request(server_1.default)
                .post('/notes')
                .send({
                title: 'New Note',
                userId: response.body._id,
                color: '#ffff',
                type: 2 /* personal */
            })
                .expect(200 /* ok */)
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
//# sourceMappingURL=note.test.js.map