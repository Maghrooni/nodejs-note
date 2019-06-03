import {BaseRepository} from "../repositories/base.repository";

interface iService {
    repository: BaseRepository;
}

export class BaseService implements iService {

    repository;

    constructor() {

    }
}