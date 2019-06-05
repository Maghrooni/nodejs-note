import {iLog, Log} from '../models/log.model'
import {BaseRepository} from "./base.repository";
import {User} from "../models/user.model";
import {configs} from "../config";


class LogRepository extends BaseRepository {

    constructor() {
        super();
    }

    getAll(page: number = configs.pagination.initialPage, perPage: number = configs.pagination.perPage) {
        return Log
            .find({})
            .limit(+perPage)
            .skip(perPage * page)
            .sort({
                _id: 'desc'
            })
            .then((docs) => {
                return docs;
            })
            .catch(err => {
                return this.errorHandler.throwError(err);
            });
    }

    getById(id: string) {
        return Log
            .findById(id)
            .then((doc) => {
                return doc;
            })
            .catch(err => {
                return this.errorHandler.throwError(err);
            });
    }

    add(log: iLog) {
        return Log
            .create(log)
            .then((doc) => {
                return doc;
            })
            .catch(err => {
                return this.errorHandler.throwError(err);
            });
    }

    delete(id: string) {
        //todo check is removed or not, promise ?
        return Log.remove({_id: id});
    }

}

module.exports = new LogRepository();