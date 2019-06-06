"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConnection_1 = require("../../dbConnection");
function testDBConnection(dropOnBefore = true, dropOnAfter = true) {
    before('cleanup database', function (done) {
        dbConnection_1.testDbConnect(done, dropOnBefore);
    });
    if (dropOnAfter) {
        after('cleanup database', function (done) {
            dbConnection_1.testDbConnect(done, true);
        });
    }
}
exports.testDBConnection = testDBConnection;
exports.default = testDBConnection;
//# sourceMappingURL=index.js.map