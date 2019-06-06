import {JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete, Res, QueryParam} from "routing-controllers";
import {statusCodes} from "../config";

const LogRepository = require('../repositories/log.repository');

@JsonController('/logs')

export class LogController {

    constructor() {
    }

    @Get()
    getAll(@Res() response: any, @QueryParam("page") page: number, @QueryParam("limit") limit: number) {
        return LogRepository
            .getAll(page, limit)
            .then((docs) => {
                response.send(docs);
            })
            .catch(err => {
                response.status(statusCodes.serverError).send(err);
            });
    }

}