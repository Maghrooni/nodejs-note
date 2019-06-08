"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../models/user.model");
const base_repository_1 = require("./base.repository");
const config_1 = require("../config");
class UserRepository extends base_repository_1.BaseRepository {
    constructor() {
        super();
        this.excludeFields = '-password -tokens';
    }
    getAll(page = config_1.configs.pagination.initialPage, perPage = config_1.configs.pagination.perPage) {
        return user_model_1.User
            .find({ status: 1 /* active */ })
            .select(this.excludeFields)
            .populate('notes', 'title tags color type', { status: 1 /* active */ })
            .limit(+perPage)
            .skip(perPage * page)
            .sort({
            _id: 'desc'
        })
            .then(docs => {
            return docs;
        })
            .catch(err => {
            return this.errorHandler.throwError(err);
        });
    }
    getByUsername(username) {
        return user_model_1.User
            .findOne({ username: username, status: 1 /* active */ })
            .select(this.excludeFields)
            .populate('notes', 'title tags color type', { status: 1 /* active */ })
            .then(doc => {
            if (!doc) {
                return this.errorHandler.throwError('failed');
            }
            return doc;
        })
            .catch(err => {
            return this.errorHandler.throwError(err);
        });
    }
    getByToken(id, token, access) {
        return user_model_1.User
            .findOne({ _id: id, 'tokens.token': token, status: 1 /* active */ })
            .select(this.excludeFields)
            .then(doc => {
            if (!doc) {
                return this.errorHandler.throwError('failed');
            }
            return doc;
        })
            .catch(err => {
            return this.errorHandler.throwError(err);
        });
    }
    getByUserPass(username, password) {
        return user_model_1.User
            .findOne({
            username: username,
            password: password,
            status: 1 /* active */
        })
            .select('-password')
            .then(doc => {
            return doc;
        })
            .catch(err => {
            return this.errorHandler.throwError(err);
        });
    }
    getById(id) {
        return user_model_1.User
            .findById(id)
            .then(doc => {
            return doc;
        })
            .catch(err => {
            return this.errorHandler.throwError(err);
        });
    }
    add(user) {
        return user_model_1.User
            .create(user)
            .then(doc => {
            return doc;
        })
            .catch(err => {
            // return this.errorHandler.throwError(err);
            return this.errorHandler.throwError(err);
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
            return this.errorHandler.throwError(err);
        });
    }
    push(id, push) {
        return user_model_1.User
            .updateOne({ _id: id }, { '$push': push })
            .then(doc => {
            return doc;
        })
            .catch(err => {
            return this.errorHandler.throwError(err);
        });
    }
}
module.exports = new UserRepository();
//# sourceMappingURL=user.repository.js.map