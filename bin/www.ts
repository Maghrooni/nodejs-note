import app from '../server';
import configs from "../config";

app.listen(configs.localPort, configs.hostName, function (err) {
    if (err) {
        return console.log(`Error : ${err}`);
    }

    console.log('Success !');
});