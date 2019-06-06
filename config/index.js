"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environments;
(function (environments) {
    environments["dev"] = "dev";
    environments["test"] = "test";
    environments["production"] = "production";
})(environments = exports.environments || (exports.environments = {}));
/**
 * General Configuration settings
 *
 * @type {{localPort: number; hostName: string; environment: environments; pagination: {initialPage: number; perPage: number}; global: {logUrls: boolean; saveLogs: boolean}; database: {ip: string; dbName: string}; test: {database: {ip: string; dbName: string}}}}
 */
exports.configs = {
    localPort: 1500,
    hostName: 'localhost',
    environment: environments.dev,
    pagination: {
        initialPage: 1,
        perPage: 10
    },
    global: {
        logUrls: false,
        saveLogs: true
    },
    database: {
        ip: '127.0.0.1',
        dbName: 'note',
    },
    test: {
        database: {
            ip: '127.0.0.1',
            dbName: 'test'
        }
    }
};
function isDevEnv() {
    return exports.configs.environment === environments.dev;
}
exports.isDevEnv = isDevEnv;
function isProductionEnv() {
    return exports.configs.environment === environments.production;
}
exports.isProductionEnv = isProductionEnv;
exports.default = exports.configs;
//# sourceMappingURL=index.js.map