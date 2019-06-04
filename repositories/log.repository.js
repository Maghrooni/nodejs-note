"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_model_1 = require("../models/log.model");
const base_repository_1 = require("./base.repository");
class LogRepository extends base_repository_1.BaseRepository {
    constructor() {
        super();
    }
    getAll() {
        return log_model_1.Log
            .find({})
            .then((docs) => {
            return docs;
        })
            .catch(err => {
            throw Error(err);
        });
    }
    getById(id) {
        return log_model_1.Log
            .findById(id)
            .then((doc) => {
            return doc;
        })
            .catch(err => {
            throw Error(err);
        });
    }
    add(log) {
        return log_model_1.Log
            .create(log)
            .then((doc) => {
            return doc;
        })
            .catch(err => {
            throw Error(err);
        });
    }
    delete(id) {
        //todo check is removed or not, promise ?
        return log_model_1.Log.remove({ _id: id });
    }
}
module.exports = new LogRepository();
//# sourceMappingURL=log.repository.js.map