import mongoose = require("mongoose");
import {configs, isProductionEnv} from './config';

// mongoose.connection
//     .on('connected', function () {
//         console.log('mongo connected !');
//     })
//     .on('err', function (err) {
//         console.log(`DB Error: ${err}`);
//     });

export function dbConnect() {
    let options = {useNewUrlParser: true};
    if (isProductionEnv()) {
        options = {...options, autoIndex: false};
    }
    return mongoose
        .connect(`mongodb://${configs.database.ip}/${configs.database.dbName}`, options)
        .then(() => {
            // console.log('mongo !');
        })
        .catch((err) => {
            console.log(`DB Error: ${err}`);
        })
}