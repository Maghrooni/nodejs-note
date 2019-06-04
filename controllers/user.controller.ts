import {JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete, Res} from "routing-controllers";
import {statusCodes} from "../config";
import {iUser} from "../models/user.model";

let UserRepository = require('../repositories/user.repository');
let UserService = require('../services/user.service');

@JsonController('/users')

export class UserController {


    constructor() {
    }

    @Get()
    getAll(@Res() response: any) {
        return UserRepository
            .getAll()
            .then((docs) => {
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
            .then((doc) => {
                return response.send(doc);
            })
            .catch(err => {
                return response.status(statusCodes.notFound).send({message : 'user not found'});
            });
    }

    @Post()
    add(@Body({required: true}) user: iUser, @Res() response: any) {
        return UserService
            .register(user)
            .then((registered) => {
                return response.send(registered);
            })
            .catch(err => {
                return response.status(statusCodes.validationError).send({message: 'registration failed'});
            });
    }

    @Post(`/login`)
    login(@Body() user: any, @Res() response: any) {
        return UserService
            .login(user)
            .then((res) => {
                return response.send(res);
            })
            .catch(err => {
                return response.status(statusCodes.unauthorized).send({message: 'login failed'});
            });
    }

    @Put(`/:id`)
    update(@Param('id') id: string, @Body() user: iUser) {
        //todo find user by Id , validate input data
        //todo check if logged in user has permission to update data
        //todo update user data
        console.log(`user data for ID ${id} will be updated !`);
    }

    @Delete(`/:id`)
    delete(@Param('id') id: string) {
        return UserRepository.delete(id);
    }

}