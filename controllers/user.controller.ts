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
    UseAfter, UseBefore
} from "routing-controllers";
import {statusCodes} from "../config";
import {iUser} from "../models/user.model";
import {LoggerMiddleware} from "../middlewares/logger.middleware";
import {BaseController} from "./base.controller";
import userConfigs from "../config/user.config";
import {AuthMiddleware} from "../middlewares/auth.middleware";

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

    @Get(`/profile/:username`)
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

    @Get(`/profile`)
    @UseBefore(AuthMiddleware)
    @OnUndefined(statusCodes.notFound)
    getProfile(@Req() request: any, @Res() response: any) {
        return response.send(response.locals.user);
        // return UserService
        //     .getByToken(request.header(userConfigs.auth.header))
        //     .then(doc => {
        //         return response.send(doc);
        //     })
        //     .catch(err => {
        //         return response.status(statusCodes.notFound).send({message: 'user not valid'});
        //     });
    }

    @Post()
    @UseAfter(LoggerMiddleware)
    add(@Body({required: true}) user: iUser, @Res() response: any) {
        return UserService
            .register(user)
            .then(registered => {
                const token = registered.tokens[0].token;
                ['password', 'tokens', 'notes'].forEach(e => delete registered._doc[e]);
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
    @UseBefore(AuthMiddleware)
    update(@Body() user: iUser, @Res() response: any) {
        return UserService
            .update(response.locals.user._id, user)
            .then(() => {
                return response.send({message: 'updated'});
            })
            .catch(err => {
                return response.status(statusCodes.validationError).send({message: 'update failed'});
            });
    }

    @Delete(`/:id`)
    @UseAfter(LoggerMiddleware)
    @UseBefore(AuthMiddleware)
    delete(@Res() response: any) {
        //todo deactivate user profile
        return UserRepository.delete(response.locals.user._id);
    }

}