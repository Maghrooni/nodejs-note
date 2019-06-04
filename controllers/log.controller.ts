import {JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete, Res} from "routing-controllers";
import {statusCodes} from "../config";

let LogRepository = require('../repositories/log.repository');

@JsonController('/logs')

export class LogController {

    constructor() {
    }

    @Get()
    getAll(@Res() response: any) {
        return LogRepository
            .getAll()
            .then((docs) => {
                response.send(docs);
            })
            .catch(err => {
                response.status(statusCodes.serverError).send(err);
            });
    }

}