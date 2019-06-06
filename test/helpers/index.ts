import {testDbConnect} from "../../dbConnection";
import request = require('supertest');
import app from "../../server";
import {statusCodes} from "../../config";

export function testDBConnection(dropOnBefore = true, dropOnAfter = true) {
    before('cleanup database', function (done) {
        testDbConnect(done, dropOnBefore);
    });
    if (dropOnAfter) {
        after('cleanup database', function (done) {
            testDbConnect(done, true);
        });
    }
}

export default testDBConnection;