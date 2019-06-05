import mongoose = require("mongoose");
import {configs, isProductionEnv} from './config';

// mongoose.connection
//     .on('connected', function () {
//         console.log('mongo connected !');
//     })
//     .on('err', function (err) {
//         console.log(`DB Error: ${err}`);
//     });

export function dbConnect(config: object = configs) {
    let options = {useNewUrlParser: true};
    // if (isProductionEnv()) {
        options = {...options, autoIndex: false};
    // }
    return mongoose
        .connect(`mongodb://${config.database.ip}/${config.database.dbName}`, options)
        .then(db => {
            return db;
            // console.log('mongo !');
        })
        .catch((err) => {
            console.log(`DB Error: ${err}`);
        })
}

export function testDbConnect(callback: any, dropDb: boolean = true) {
    return mongoose.connect(`mongodb://${configs.test.database.ip}/${configs.test.database.dbName}`, {useNewUrlParser: true}, function () {
        if (dropDb) {
            return mongoose.connection.db.dropDatabase(callback);
        }
        callback();
    });
}