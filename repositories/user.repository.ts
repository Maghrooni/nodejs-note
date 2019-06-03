import {iUser, User} from '../models/user.model'
import {BaseRepository} from "./base.repository";
import {itemStatuses} from "../config";
import {request} from "http";


class UserRepository extends BaseRepository {
    excludeFields = '-password';

    constructor() {
        super();
    }

    //todo use promise
    getAll() {
        return User
            .find({status: itemStatuses.active})
            .select(this.excludeFields)
            .then((found) => {
                // return this.getOnlyDocumentFields(found);
                return found;
            })
            .catch(err => {
                return err;
            });
    }

    getByField(field: String, value: Number | String) {
        return User
            .find({field: value})
            .select(this.excludeFields)
            .then((found) => {
                // return this.getOnlyDocumentFields(found);
                return found;
            })
            .catch(err => {
                return err;
            });
    }

    getByUserPass(username: String, password: (Number | String)) {
        return User
            .findOne({
                username: username,
                password: password,
                status: itemStatuses.active
            })
            .select(this.excludeFields)
            .then((found) => {
                return found;
            })
            .catch(err => {
                return err;
            });
    }

    getById(id: string) {
        return User
            .findById(id)
            .then((found) => {
                return found;
            })
            .catch(err => {
                return err;
            });
    }

    add(user: iUser) {
        return User
            .create(user)
            .then(() => {
                return user;
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