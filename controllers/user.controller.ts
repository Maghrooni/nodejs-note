import {JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import userModel from '../models/user.model';
import {statusCodes} from "../config";

@JsonController()

export class userController {

    someUserData: userModel[];

    constructor() {
        console.log('user controller constructed');
        this.someUserData = [
            new userModel('mehdi', 'maghrooni', 'maghrooni@gmail.com', 989898),
            new userModel('meiti', 'maghrooni', 'maghrooni1@gmail.com', 989898),
            new userModel('mehti', 'maghrooni', 'maghrooni2@gmail.com', 989898),
        ];
    }


    @Get('/users')
    getAll() {
        return this.someUserData;
    }

    @Get('/users/:id')
    @OnUndefined(statusCodes.notFound)
    getOne(@Param('id') id: Number) {
        console.log(`will find user with this ID ${id}`);
    }


    @Post('/users')
    add(@Body() user: userModel) {
        //todo validation on user service
        const newUser = new userModel(user.name, user.username, user.email, user.password);
        return newUser;
    }

}