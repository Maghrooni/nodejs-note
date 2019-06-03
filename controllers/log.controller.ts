import {JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import {statusCodes} from "../config";

let LogRepository = require('../repositories/log.repository');

@JsonController()

export class LogController {

    private static _path = '/logs';

    constructor() {
    }

    @Get(LogController._path)
    getAll() {
        return LogRepository.getAll();
    }

}