import {iUser, User} from '../models/user.model'
import {BaseRepository} from "./base.repository";
import {itemStatuses, configs} from "../config";
import {request} from "http";


class UserRepository extends BaseRepository {
    excludeFields = '-password';

    constructor() {
        super();
    }

    getAll(page: number = configs.pagination.initialPage, perPage: number = configs.pagination.perPage) {
        return User
            .find({status: itemStatuses.active})
            .select(this.excludeFields)
            .populate('notes', 'title tags color type', {status: itemStatuses.active})
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

    getByUsername(username: string) {
        return User
            .findOne({username: username})
            .select(this.excludeFields)
            .populate('notes', 'title tags color type', {status: itemStatuses.active})
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

    getByUserPass(username: string, password: (number | string)) {
        return User
            .findOne({
                username: username,
                password: password,
                status: itemStatuses.active
            })
            .select(this.excludeFields)
            .then(doc => {
                return doc;
            })
            .catch(err => {
                throw Error(err);
            });
    }

    getById(id: string) {
        return User
            .findById(id)
            .then(doc => {
                return doc;
            })
            .catch(err => {
                throw Error(err);
            });
    }

    add(user: iUser) {
        return User
            .create(user)
            .then(doc => {
                return doc;
            })
            .catch(err => {
                throw Error(err);
            });
    }

    delete(id: string) {
        //todo check is removed or not, promise ?
        return User.findOneAndRemove({_id: id});
    }

    update(id: string, updates: object) {
        return User
            .updateOne({_id: id}, updates)
            .then(doc => {
                return doc;
            })
            .catch(err => {
                throw Error(err);
            });
    }

    push(id: string, push: object) {
        return User
            .updateOne({_id: id}, {'$push': push})
            .then(doc => {
                return doc;
            })
            .catch(err => {
                throw Error(err);
            });
    }

}

module.exports = new UserRepository();