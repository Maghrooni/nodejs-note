"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../models/user.model");
const base_repository_1 = require("./base.repository");
class UserRepository extends base_repository_1.BaseRepository {
    constructor() {
        super();
        this.excludeFields = '-password';
    }
    getAll() {
        return user_model_1.User
            .find({ status: 1 /* active */ })
            .select(this.excludeFields)
            .then((found) => {
            // return this.getOnlyDocumentFields(found);
            return found;
        })
            .catch(err => {
            return err;
        });
    }
    getByField(field, value) {
        return user_model_1.User
            .find({ field: value })
            .select(this.excludeFields)
            .then((found) => {
            // return this.getOnlyDocumentFields(found);
            return found;
        })
            .catch(err => {
            return err;
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
            .then((found) => {
            return found;
        })
            .catch(err => {
            return err;
        });
    }
    getById(id) {
        return user_model_1.User
            .findById(id)
            .then((found) => {
            return found;
        })
            .catch(err => {
            return err;
        });
    }
    add(user) {
        return user_model_1.User
            .create(user)
            .then(() => {
            return user;
        })
            .catch(err => {
            return err;
        });
    }
    delete(id) {
        //todo check is removed or not, promise ?
        return user_model_1.User.remove({ id: id });
    }
}
module.exports = new UserRepository();
//# sourceMappingURL=user.repository.js.map