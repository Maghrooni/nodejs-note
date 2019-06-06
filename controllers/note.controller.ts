import {JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete, Res, QueryParam} from "routing-controllers";
import {statusCodes} from "../config";
import {noteTypes} from "../config/note";
import {iNote} from "../models/note.model";

const NoteRepository = require('../repositories/note.repository');
const NoteService = require('../services/note.service');

@JsonController('/notes')

export class NoteController {

    constructor() {
    }

    @Get()
    getAll(@Res() response: any, @QueryParam("page") page: number, @QueryParam("limit") limit: number) {
        return NoteRepository
            .getAll(page, limit)
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

    @Get('/tag/:tag')
    @OnUndefined(statusCodes.notFound)
    getByTag(@Param('tag') tag: string, @Res() response: any) {
        return NoteRepository
            .getByTag(tag)
            .then((docs) => {
                response.send(docs);
            })
            .catch(err => {
                response.status(statusCodes.serverError).send(err);
            });
    }

    @Post('/:userId')
    add(@Param('userId') userId: string, @Body() note: iNote, @Res() response: any) {
        return NoteService
            .add(userId, note)
            .then((doc) => {
                response.send(doc);
            })
            .catch(err => {
                response.status(statusCodes.serverError).send(err);
            });
    }

    @Put('/:id')
    update(@Param('id') id: string, @Body() note: iNote, @Res() response: any) {
        return NoteService
            .update(id, note)
            .then(() => {
                return response.send({message: 'updated'});
            })
            .catch(err => {
                return response.status(statusCodes.validationError).send({message: 'update failed'});
            });
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return NoteService.delete(id);
    }

}