import {JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete, Res} from "routing-controllers";
import {statusCodes} from "../config";

let NoteRepository = require('../repositories/note.repository');
let NoteService = require('../services/note.service')

@JsonController('/notes')

export class NoteController {

    constructor() {
    }

    @Get()
    getAll(@Res() response: any) {
        return NoteRepository
            .getAll()
            .then((docs) => {
                response.send(docs);
            })
            .catch(err => {
                response.status(statusCodes.serverError).send(err);
            });
    }

    @Get('/:id')
    @OnUndefined(statusCodes.notFound)
    getById(@Param('id') id: string, @Res() response: any) {
        return NoteRepository
            .getById(id)
            .then((doc) => {
                response.send(doc);
            })
            .catch(err => {
                response.status(statusCodes.serverError).send(err);
            });
    }

    @Get('/:username')
    @OnUndefined(statusCodes.notFound)
    getByUsername(@Param('username') username: string, @Res() response: any) {
        return NoteRepository
            .getByUsername(username)
            .then((docs) => {
                response.send(docs);
            })
            .catch(err => {
                response.status(statusCodes.serverError).send(err);
            });
    }

    @Post()
    add(@Body() user: any, @Res() response: any) {
        return NoteService
            .add(user)
            .then((doc) => {
                response.send(doc);
            })
            .catch(err => {
                response.status(statusCodes.serverError).send(err);
            });
    }

    @Put('/:id')
    update(@Param('id') id: string, @Body() user: any, @Res() response: any) {
        //todo validate input data
        //todo update user data
        console.log(`note data for ID ${id} will be updated !`);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return NoteService.delete(id);
    }

}