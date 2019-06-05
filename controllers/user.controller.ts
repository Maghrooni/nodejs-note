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
    QueryParam
} from "routing-controllers";
import {statusCodes} from "../config";
import {iUser} from "../models/user.model";

let UserRepository = require('../repositories/user.repository');
let UserService = require('../services/user.service');

@JsonController('/users')

export class UserController {


    constructor() {
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
    add(@Body({required: true}) user: iUser, @Res() response: any) {
        return UserService
            .register(user)
            .then(registered => {
                return response.send(registered);
            })
            .catch(err => {
                return response.status(statusCodes.validationError).send({message: 'registration failed'});
            });
    }

    @Post(`/login`)
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
    delete(@Param('id') id: string) {
        return UserRepository.delete(id);
    }

}