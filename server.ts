import express = require('express')
import configs from './config'
import {useExpressServer} from 'routing-controllers';
import "reflect-metadata";

const app = express();

import userRoutes from './routes/user.route';
import defaultRoutes from './routes';
import {userController} from "./controllers/user.controller";


useExpressServer(app, {
    controllers: [userController]
});

app.use('/', defaultRoutes);
app.use('/api/user/', userRoutes);

app.use(function (req, res, next) {
    if (configs.global.logging) {
        console.log(`Logger  - Url : ${req.url}`);
    }
    next();
});

export default app;