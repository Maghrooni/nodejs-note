"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var config_1 = require("./config");
var routing_controllers_1 = require("routing-controllers");
require("reflect-metadata");
var bodyParser = require("body-parser");
var dbConnection_1 = require("./dbConnection");
var app = express();
dbConnection_1.dbConnect();
// import userRoutes from './routes/user.route';
// import defaultRoutes from './routes';
var user_controller_1 = require("./controllers/user.controller");
routing_controllers_1.useExpressServer(app, {
    controllers: [user_controller_1.UserController]
});
app.use(bodyParser.json());
// app.use('/', defaultRoutes);
// app.use('/api/user/', userRoutes);
app.use(function (req, res, next) {
    if (config_1.default.global.logging) {
        console.log("Logger  - Url : " + req.url);
    }
    next();
});
exports.default = app;
//# sourceMappingURL=server.js.map