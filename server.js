"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var config_1 = require("./config");
var routing_controllers_1 = require("routing-controllers");
require("reflect-metadata");
var app = express();
var user_route_1 = require("./routes/user.route");
var routes_1 = require("./routes");
var user_controller_1 = require("./controllers/user.controller");
routing_controllers_1.useExpressServer(app, {
    controllers: [user_controller_1.userController]
});
app.use('/', routes_1.default);
app.use('/api/user/', user_route_1.default);
app.use(function (req, res, next) {
    if (config_1.default.global.logging) {
        console.log("Logger  - Url : " + req.url);
    }
    next();
});
exports.default = app;
//# sourceMappingURL=server.js.map