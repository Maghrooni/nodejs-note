import {iLog, Log} from '../models/log.model'
import {BaseRepository} from "./base.repository";
import {User} from "../models/user.model";


class LogRepository extends BaseRepository {

    constructor() {
        super();
    }

    //todo use promise
    getAll() {
        return Log
            .find({})
            .then((found) => {
                return found;
            })
            .catch(err => {
                return err;
            });
    }

    getByField(field: String, value: Number | String) {
        return Log
            .find({field: value})
            .then((found) => {
                return found;
            })
            .catch(err => {
                return err;
            });
    }

    getById(id: string) {
        return Log
            .findById(id)
            .then((found) => {
                return found;
            })
            .catch(err => {
                return err;
            });
    }

    add(log: iLog) {
        return Log
            .create(log)
            .then((created) => {
                return created;
            })
            .catch(err => {
                return err;
            });
    }

    delete(id: Number) {
        //todo check is removed or not, promise ?
        return Log.remove({id: id});
    }

}

module.exports = new LogRepository();