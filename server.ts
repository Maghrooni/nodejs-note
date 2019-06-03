import express = require('express')
import configs from './config'
import {useExpressServer} from 'routing-controllers';

var app = express();

import userRoutes from './routes/userRoutes';
import defaultRoutes from './routes';

app.use('/', defaultRoutes);
app.use('/api/user/', userRoutes);

app.use(function (req, res, next) {
    if (configs.global.logging) {
        console.log(`Logger  - Url : ${req.url}`);
    }
    next();
});

export default app;