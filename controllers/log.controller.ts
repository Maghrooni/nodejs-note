import {JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import {statusCodes} from "../config";

let LogRepository = require('../repositories/log.repository');

@JsonController('/logs')

export class LogController {

    constructor() {
    }

    @Get()
    getAll() {
        return LogRepository.getAll();
    }

}