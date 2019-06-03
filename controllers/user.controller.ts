import {JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import {statusCodes} from "../config";

let UserRepository = require('../repositories/user.repository');
let UserService = require('../services/user.service')

@JsonController()

export class UserController {

    private static _path = '/users';

    constructor() {
    }

    @Get(UserController._path)
    getAll() {
        return UserRepository.getAll();
    }

    @Get(`${UserController._path}/:id`)
    @OnUndefined(statusCodes.notFound)
    getById(@Param('id') id: Number) {
        return UserRepository.getById(id);
    }

    @Get(`${UserController._path}/:username`)
    @OnUndefined(statusCodes.notFound)
    getByUsername(@Param('username') username: String) {
        return UserRepository.getByField('username', username);
    }

    @Post(UserController._path)
    add(@Body() user: any) {
        //todo change any to User
        return UserService.register(user);
    }

    @Put(`${UserController._path}/:id`)
    update(@Param('id') id: Number, @Body() user: any) {
        //todo find user by Id , validate input data
        //todo check if logged in user has permission to update data
        //todo update user data
        console.log(`user data for ID ${id} will be updated !`);
    }

    @Delete(`${UserController._path}/:id`)
    delete(@Param('id') id: Number) {
        return UserRepository.delete(id);
    }

}