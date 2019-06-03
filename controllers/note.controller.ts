import {JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import {statusCodes} from "../config";

let NoteRepository = require('../repositories/note.repository');
let NoteService = require('../services/note.service')

@JsonController()

export class NoteController {

    private _path;

    constructor() {
        this._path = '/notes';
    }

    @Get(this._path)
    getAll() {
        return NoteRepository.getAll();
    }

    @Get(`${this._path}/:id`)
    @OnUndefined(statusCodes.notFound)
    getById(@Param('id') id: Number) {
        return NoteRepository.getById(id);
    }

    @Get(`${this._path}/:username`)
    @OnUndefined(statusCodes.notFound)
    getByUsername(@Param('username') username: String) {
        return NoteRepository.getByUsername(username);
    }

    @Post(this._path)
    add(@Body() user: any) {
        return NoteService.add(user);
    }

    @Put(`${this._path}/:id`)
    update(@Param('id') id: Number, @Body() user: any) {
        //todo validate input data
        //todo update user data
        console.log(`note data for ID ${id} will be updated !`);
    }

    @Delete(`${this._path}/:id`)
    delete(@Param('id') id: Number) {
        return NoteService.delete(id);
    }

}