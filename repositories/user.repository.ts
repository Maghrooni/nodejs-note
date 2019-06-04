import {iUser, User} from '../models/user.model'
import {BaseRepository} from "./base.repository";
import {itemStatuses} from "../config";
import {request} from "http";


class UserRepository extends BaseRepository {
    excludeFields = '-password';

    constructor() {
        super();
    }

    getAll() {
        return User
            .find({status: itemStatuses.active})
            .select(this.excludeFields)
            .then((docs) => {
                return docs;
            })
            .catch(err => {
                return err;
            });
    }

    getByField(field: string, value: number | string) {
        return User
            .find({field: value})
            .select(this.excludeFields)
            .then((doc) => {
                return doc;
            })
            .catch(err => {
                return err;
            });
    }

    getByUserPass(username: string, password: (number | string)) {
        return User
            .findOne({
                username: username,
                password: password,
                status: itemStatuses.active
            })
            .select(this.excludeFields)
            .then((doc) => {
                return doc;
            })
            .catch(err => {
                return err;
            });
    }

    getById(id: string) {
        return User
            .findById(id)
            .then((doc) => {
                return doc;
            })
            .catch(err => {
                return err;
            });
    }

    add(user: iUser) {
        return User
            .create(user)
            .then((doc) => {
                return doc;
            })
            .catch(err => {
                return err;
            });
    }

    delete(id: string) {
        //todo check is removed or not, promise ?
        return User.remove({id: id});
    }

}

module.exports = new UserRepository();