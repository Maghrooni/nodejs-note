import {JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import {statusCodes} from "../config";

let NoteRepository = require('../repositories/note.repository');
let NoteService = require('../services/note.service')

@JsonController()

export class NoteController {

    private static _path = '/notes';

    constructor() {
    }

    @Get(NoteController._path)
    getAll() {
        return NoteRepository.getAll();
    }

    @Get(`${NoteController._path}/:id`)
    @OnUndefined(statusCodes.notFound)
    getById(@Param('id') id: number) {
        return NoteRepository.getById(id);
    }

    @Get(`${NoteController._path}/:username`)
    @OnUndefined(statusCodes.notFound)
    getByUsername(@Param('username') username: string) {
        return NoteRepository.getByUsername(username);
    }

    @Post(NoteController._path)
    add(@Body() user: any) {
        return NoteService.add(user);
    }

    @Put(`${NoteController._path}/:id`)
    update(@Param('id') id: number, @Body() user: any) {
        //todo validate input data
        //todo update user data
        console.log(`note data for ID ${id} will be updated !`);
    }

    @Delete(`${NoteController._path}/:id`)
    delete(@Param('id') id: number) {
        return NoteService.delete(id);
    }

}