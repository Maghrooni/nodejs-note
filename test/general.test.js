"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const dbConnection_1 = require("../dbConnection");
config_1.configs.environment = config_1.environments.test;
describe('GeneralTesting', function () {
    before('cleanup database', function (done) {
        dbConnection_1.testDbConnect(done, true);
    });
});
//# sourceMappingURL=general.test.js.map