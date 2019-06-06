"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const config_1 = require("./config");
// mongoose.connection
//     .on('connected', function () {
//         console.log('mongo connected !');
//     })
//     .on('err', function (err) {
//         console.log(`DB Error: ${err}`);
//     });
/**
 * Connection to Database
 *
 * @param {object} config
 * @returns {Promise<T | void>}
 */
function dbConnect(config = config_1.configs) {
    let options = { useNewUrlParser: true };
    // if (isProductionEnv()) {
    options = Object.assign({}, options, { autoIndex: false });
    // }
    return mongoose
        .connect(`mongodb://${config.database.ip}/${config.database.dbName}`, options)
        .then(db => {
        return db;
        // console.log('mongo !');
    })
        .catch((err) => {
        console.log(`DB Error: ${err}`);
    });
}
exports.dbConnect = dbConnect;
/**
 *
 * Connection to Test Database
 *
 * @param callback
 * @param {boolean} dropDb to whether drop the database on connection or not
 * @returns {module:mongoose.Mongoose}
 */
function testDbConnect(callback, dropDb = true) {
    return mongoose.connect(`mongodb://${config_1.configs.test.database.ip}/${config_1.configs.test.database.dbName}`, { useNewUrlParser: true }, function () {
        if (dropDb) {
            return mongoose.connection.db.dropDatabase(callback);
        }
        callback();
    });
}
exports.testDbConnect = testDbConnect;
//# sourceMappingURL=dbConnection.js.map