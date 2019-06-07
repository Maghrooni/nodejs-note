import {
    JsonController,
    OnUndefined,
    Param,
    Body,
    Get,
    Post,
    Put,
    Delete,
    Res,
    Req,
    QueryParam,
    UseAfter
} from "routing-controllers";
import {statusCodes} from "../config";
import {iUser} from "../models/user.model";
import {LoggerMiddleware} from "../middlewares/logger.middleware";
import {BaseController} from "./base.controller";
import userConfigs from "../config/user.config";

const UserRepository = require('../repositories/user.repository');
const UserService = require('../services/user.service');

@JsonController('/users')
export class UserController extends BaseController {


    constructor() {
        super();
    }

    @Get()
    getAll(@Res() response: any, @QueryParam("page") page: number, @QueryParam("limit") limit: number) {
        return UserRepository
            .getAll(page, limit)
            .then(docs => {
                return response.send(docs);
            })
            .catch(err => {
                return response.status(statusCodes.serverError).send(err);
            });
    }

    @Get(`/:username`)
    @UseAfter(LoggerMiddleware)
    @OnUndefined(statusCodes.notFound)
    getByUsername(@Param('username') username: string, @Res() response: any) {
        return UserRepository
            .getByUsername(username)
            .then(doc => {
                return response.send(doc);
            })
            .catch(err => {
                return response.status(statusCodes.notFound).send({message: 'user not found'});
            });
    }

    @Post()
    @UseAfter(LoggerMiddleware)
    add(@Body({required: true}) user: iUser, @Res() response: any) {
        return UserService
            .register(user)
            .then(registered => {
                const token = registered.tokens[0].token;
                ['password', 'tokens', 'notes'].forEach(e => delete registered._doc[e]);
                console.log(registered);
                return response
                    .header(userConfigs.auth.header, token)
                    .send(registered);
            })
            .catch(err => {
                return response.status(statusCodes.validationError).send({message: err.message});
            });
    }

    @Post(`/login`)
    @UseAfter(LoggerMiddleware)
    login(@Body() user: any, @Req() request: any, @Res() response: any) {
        return UserService
            .login(user, request)
            .then(res => {
                return response.send(res);
            })
            .catch(err => {
                return response.status(statusCodes.unauthorized).send({message: 'login failed'});
            });
    }

    @Put(`/:id`)
    @UseAfter(LoggerMiddleware)
    update(@Param('id') id: string, @Body() user: iUser, @Res() response: any) {
        //todo check if logged in user has permission to update data
        return UserService
            .update(id, user)
            .then(() => {
                return response.send({message: 'updated'});
            })
            .catch(err => {
                return response.status(statusCodes.validationError).send({message: 'update failed'});
            });
    }

    @Delete(`/:id`)
    @UseAfter(LoggerMiddleware)
    delete(@Param('id') id: string) {
        return UserRepository.delete(id);
    }

}