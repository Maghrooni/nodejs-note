import should = require('should');
import {configs, environments, statusCodes} from '../config';
import {testDbConnect} from "../dbConnection";
import request = require('supertest');
import app from '../server';

configs.environment = environments.test;

describe('GeneralTesting', function () {
    before('cleanup database', function (done) {
        testDbConnect(done, true);
    });

});