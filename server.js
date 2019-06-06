"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("./config");
const routing_controllers_1 = require("routing-controllers");
require("reflect-metadata");
const dbConnection_1 = require("./dbConnection");
const app = express();
dbConnection_1.dbConnect();
// import userRoutes from './routes/user.route';
// import defaultRoutes from './routes';
// import {UserController} from "./controllers/user.controller";
// import {NoteController} from "./controllers/note.controller";
routing_controllers_1.useExpressServer(app, {
    controllers: [__dirname + "/controllers/*.js"],
    defaultErrorHandler: false
});
// app.use(bodyParser.json());
// app.use('/', defaultRoutes);
// app.use('/api/user/', userRoutes);
app.use(function (req, res, next) {
    if (config_1.default.global.logUrls) {
        console.log(`Logger  - Url : ${req.url}`);
    }
    next();
});
exports.default = app;
//# sourceMappingURL=server.js.map