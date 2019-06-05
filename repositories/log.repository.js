"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_model_1 = require("../models/log.model");
const base_repository_1 = require("./base.repository");
const config_1 = require("../config");
class LogRepository extends base_repository_1.BaseRepository {
    constructor() {
        super();
    }
    getAll(page = config_1.configs.pagination.initialPage, perPage = config_1.configs.pagination.perPage) {
        return log_model_1.Log
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
    getById(id) {
        return log_model_1.Log
            .findById(id)
            .then((doc) => {
            return doc;
        })
            .catch(err => {
            return this.errorHandler.throwError(err);
        });
    }
    add(log) {
        return log_model_1.Log
            .create(log)
            .then((doc) => {
            return doc;
        })
            .catch(err => {
            return this.errorHandler.throwError(err);
        });
    }
    delete(id) {
        //todo check is removed or not, promise ?
        return log_model_1.Log.remove({ _id: id });
    }
}
module.exports = new LogRepository();
//# sourceMappingURL=log.repository.js.map