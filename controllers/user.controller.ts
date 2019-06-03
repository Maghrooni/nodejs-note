import {JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import userModel from '../models/user.model';
import {statusCodes} from "../config";

@JsonController()

export class userController {

    someUserData: userModel[];

    constructor() {
        this.someUserData = [
            new userModel('mehdi', 'maghrooni', 'maghrooni@gmail.com', 989898),
            new userModel('meiti', 'maghrooni', 'maghrooni1@gmail.com', 989898),
            new userModel('mehti', 'maghrooni', 'maghrooni2@gmail.com', 989898),
        ];
    }


    @Get('/users')
    getAll() {
        return this.someUserData.filter(function (users) {
            delete users.password;
            return true;
        });
    }

    @Get('/users/:id')
    @OnUndefined(statusCodes.notFound)
    getById(@Param('id') id: Number) {
        //todo return found user with id
        console.log(`will find user with this ID ${id}`);
    }

    @Get('/users/:username')
    @OnUndefined(statusCodes.notFound)
    getByUsername(@Param('username') username: String) {
        //todo return found user with username
        console.log(`will find user with this Username ${username}`);
    }


    @Post('/users')
    add(@Body() user: userModel) {
        console.log(user);
        //todo validation on user service
        const newUser = new userModel(user.name, user.username, user.email, user.password);
        return newUser;
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
        //todo remove user
        console.log(`user with ID ${id} will be removed !`)
    }

}