import {Log} from '../models/log.model'
import {BaseRepository} from "./base.repository";


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
        return Log.find({field: value});
    }

    getById(id: Number) {

    }

    add(log: Log) {
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