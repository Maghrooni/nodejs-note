import {JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete, Res} from "routing-controllers";
import {statusCodes} from "../config";
import {iUser, User} from "../models/user.model";

let UserRepository = require('../repositories/user.repository');
let UserService = require('../services/user.service')

@JsonController('/users')

export class UserController {


    constructor() {
    }

    @Get()
    getAll() {
        return UserRepository.getAll();
    }

    @Get('/:id')
    @OnUndefined(statusCodes.notFound)
    getById(@Param('id') id: string) {
        return UserRepository.getById(id);
    }

    @Get(`/:username`)
    @OnUndefined(statusCodes.notFound)
    getByUsername(@Param('username') username: string) {
        return UserRepository.getByField('username', username);
    }

    @Post()
    add(@Body({required: true}) user: iUser, @Res() response: any) {
        return UserService
            .register(user)
            .then((registered) => {
                response.send(registered);
            })
            .catch(err => {
                response.status(statusCodes.serverError).send(err);
            });
    }

    @Post(`/login`)
    login(@Body() user: any) {
        //todo change any to User
        return UserService.login(user);
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