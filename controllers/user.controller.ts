import {JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import user from '../models/user.model';

@JsonController()

export class userController {

    constructor() {
        console.log('user controller constructed');
    }

}