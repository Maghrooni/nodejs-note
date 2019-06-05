"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../models/user.model");
const base_repository_1 = require("./base.repository");
const config_1 = require("../config");
class UserRepository extends base_repository_1.BaseRepository {
    constructor() {
        super();
        this.excludeFields = '-password';
    }
    getAll(page = config_1.configs.pagination.initialPage, perPage = config_1.configs.pagination.perPage) {
        return user_model_1.User
            .find({ status: 1 /* active */ })
            .select(this.excludeFields)
            .limit(+perPage)
            .skip(perPage * page)
            .sort({
            _id: 'desc'
        })
            .then(docs => {
            return docs;
        })
            .catch(err => {
            throw Error(err);
        });
    }
    getByUsername(username) {
        return user_model_1.User
            .findOne({ username: username })
            .select(this.excludeFields)
            .then(doc => {
            if (!doc) {
                throw Error('');
            }
            return doc;
        })
            .catch(err => {
            throw Error(err);
        });
    }
    getByUserPass(username, password) {
        return user_model_1.User
            .findOne({
            username: username,
            password: password,
            status: 1 /* active */
        })
            .select(this.excludeFields)
            .then(doc => {
            return doc;
        })
            .catch(err => {
            throw Error(err);
        });
    }
    getById(id) {
        return user_model_1.User
            .findById(id)
            .then(doc => {
            return doc;
        })
            .catch(err => {
            throw Error(err);
        });
    }
    add(user) {
        return user_model_1.User
            .create(user)
            .then(doc => {
            return doc;
        })
            .catch(err => {
            throw Error(err);
        });
    }
    delete(id) {
        //todo check is removed or not, promise ?
        return user_model_1.User.findOneAndRemove({ _id: id });
    }
    update(id, updates) {
        return user_model_1.User
            .updateOne({ _id: id }, updates)
            .then(doc => {
            return doc;
        })
            .catch(err => {
            throw Error(err);
        });
    }
}
module.exports = new UserRepository();
//# sourceMappingURL=user.repository.js.map