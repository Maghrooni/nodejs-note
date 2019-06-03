"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var config_1 = require("./config");
var routing_controllers_1 = require("routing-controllers");
require("reflect-metadata");
var dbConnection_1 = require("./dbConnection");
var app = express();
dbConnection_1.dbConnect();
routing_controllers_1.useExpressServer(app, {
    controllers: [__dirname + "/controllers/*.js"]
});
// app.use(bodyParser.json());
// app.use('/', defaultRoutes);
// app.use('/api/user/', userRoutes);
app.use(function (req, res, next) {
    if (config_1.default.global.logUrls) {
        console.log("Logger  - Url : " + req.url);
    }
    next();
});
exports.default = app;
//# sourceMappingURL=server.js.map