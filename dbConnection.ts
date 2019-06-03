import mongoose = require("mongoose");
import configs from './config';

// mongoose.connection
//     .on('connected', function () {
//         console.log('mongo connected !');
//     })
//     .on('err', function (err) {
//         console.log(`DB Error: ${err}`);
//     });

export function dbConnect() {
    return mongoose
        .connect(`mongodb://${configs.database.ip}/${configs.database.dbName}`,{ useNewUrlParser: true })
        .then(()=>{
            console.log('mongo ssss !');
        })
        .catch((err) => {
            console.log(`DB Error: ${err}`);
        })
}