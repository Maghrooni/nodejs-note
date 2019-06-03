import {JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import {statusCodes} from "../config";

let UserRepository = require('../repositories/user.repository');

@JsonController()

export class UserController {

    constructor() {

    }

    @Get('/users')
    getAll() {
        return UserRepository.getAll();
    }

    @Get('/users/:id')
    @OnUndefined(statusCodes.notFound)
    getById(@Param('id') id: Number) {
        return UserRepository.getById(id);
    }

    @Get('/users/:username')
    @OnUndefined(statusCodes.notFound)
    getByUsername(@Param('username') username: String) {
        return UserRepository.getByField('username', username);
    }

    @Post('/users')
    add(@Body() user: userModel) {
        //todo move to User Services
        return UserRepository.add(user);
    }

    @Put('/users/:id')
    update(@Param('id') id: Number, @Body() user: any) {
        //todo find user by Id , validate input data
        //todo check if logged in user has permission to update data
        //todo update user data
        console.log(`user data for ID ${id} will be updated !`);
    }

    @Delete('/users/:id')
    delete(@Param('id') id: Number) {
        return UserRepository.delete(id);
    }

}