import {JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import {statusCodes} from "../config";
import {User} from "../models/user.model";

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
    getById(@Param('id') id: Number) {
        return UserRepository.getById(id);
    }

    @Get(`/:username`)
    @OnUndefined(statusCodes.notFound)
    getByUsername(@Param('username') username: String) {
        return UserRepository.getByField('username', username);
    }

    @Post()
    add(@Body() user: any) {
        //todo change any to User
        return UserService.register(user);
    }

    @Post(`/login`)
    login(@Body() user: any) {
        //todo change any to User
        return UserService.login(user);
    }

    @Put(`/:id`)
    update(@Param('id') id: Number, @Body() user: any) {
        //todo find user by Id , validate input data
        //todo check if logged in user has permission to update data
        //todo update user data
        console.log(`user data for ID ${id} will be updated !`);
    }

    @Delete(`/:id`)
    delete(@Param('id') id: Number) {
        return UserRepository.delete(id);
    }

}