import express = require('express')
import configs from './config'
import {useExpressServer} from 'routing-controllers';
import 'reflect-metadata';
import bodyParser = require('body-parser');
import {dbConnect} from "./dbConnection";

const app = express();
dbConnect();
// import userRoutes from './routes/user.route';
// import defaultRoutes from './routes';
import {UserController} from "./controllers/user.controller";
import {NoteController} from "./controllers/note.controller";


useExpressServer(app, {
    controllers: [UserController, NoteController]
});

app.use(bodyParser.json());
// app.use('/', defaultRoutes);
// app.use('/api/user/', userRoutes);

app.use(function (req, res, next) {
    if (configs.global.logUrls) {
        console.log(`Logger  - Url : ${req.url}`);
    }
    next();
});

export default app;