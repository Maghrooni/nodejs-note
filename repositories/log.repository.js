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
            .then((found) => {
            return found;
        })
            .catch(err => {
            return err;
        });
    }
    getById(id) {
        return log_model_1.Log
            .findById(id)
            .then((found) => {
            return found;
        })
            .catch(err => {
            return err;
        });
    }
    add(log) {
        return log_model_1.Log
            .create(log)
            .then((created) => {
            return created;
        })
            .catch(err => {
            return err;
        });
    }
    delete(id) {
        //todo check is removed or not, promise ?
        return log_model_1.Log.remove({ id: id });
    }
}
module.exports = new LogRepository();
//# sourceMappingURL=log.repository.js.map