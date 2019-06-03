"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../server");
const config_1 = require("../config");
server_1.default.listen(config_1.default.localPort, config_1.default.hostName, function (err) {
    if (err) {
        return console.log(`Error : ${err}`);
    }
    console.log('Success !');
});
//# sourceMappingURL=www.js.map