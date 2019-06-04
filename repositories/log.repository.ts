import {iLog, Log} from '../models/log.model'
import {BaseRepository} from "./base.repository";
import {User} from "../models/user.model";


class LogRepository extends BaseRepository {

    constructor() {
        super();
    }

    getAll() {
        return Log
            .find({})
            .then((docs) => {
                return docs;
            })
            .catch(err => {
                return err;
            });
    }

    getById(id: string) {
        return Log
            .findById(id)
            .then((doc) => {
                return doc;
            })
            .catch(err => {
                return err;
            });
    }

    add(log: iLog) {
        return Log
            .create(log)
            .then((doc) => {
                return doc;
            })
            .catch(err => {
                return err;
            });
    }

    delete(id: string) {
        //todo check is removed or not, promise ?
        return Log.remove({id: id});
    }

}

module.exports = new LogRepository();