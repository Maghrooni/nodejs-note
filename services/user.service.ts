import {BaseService} from "./base.service";
import {logPriorities} from "../config/log";
import {iUser} from "../models/user.model";

let LogService = require('./log.service');

let UserRepository = require('../repositories/user.repository');

class UserService extends BaseService {

    constructor() {
        super();
        this.repository = UserRepository;
    }

    register(user: iUser) {
        //todo use transactions ?
        //todo session or use tokens
        //todo check autologin config
        return UserRepository
            .add(user)
            .then(doc => {
                if (doc.errors !== undefined) {
                    throw Error(doc.errors.message);
                }
                return doc;
            })
            //todo fix log
            // .then(doc => {
            //     LogService.add({
            //         title: 'New User', priority: logPriorities.medium, data: {
            //             user: doc
            //         }
            //     });
            //     return doc;
            // })
            .catch(err => {
                throw Error(err);
            });
    }

    login(user: iUser, request: any) {
        return this.repository
            .getByUserPass(
                user.username,
                user.password
            )
            .then(doc => {
                if (!doc) {
                    LogService.add({
                        title: 'Login Failed', priority: logPriorities.high, data: {
                            error: e,
                            user: user
                        }
                    });
                    throw Error('login failed');
                }
                return doc;
            })
            .then(doc => {
                this.repository.update(doc._id, {
                    lastLogin: new Date(),
                    lastLoginIp: request.headers['x-forwarded-for'] || request.connection.remoteAddress
                });
                return doc;
            })
            .catch(err => {
                throw Error(err);
            });
    }

    update(id: string, updates: object) {
        return this.repository
            .update(id, updates)
            .then(updated => {
                if (updated.nModified <= 0) {
                    throw Error('');
                }
                return updated;
            })
            .catch(err => {
                throw Error(err);
            });
    }

    remove(id: string) {
        //todo check document exists !
        //todo get document
        //todo remove notes
        //todo remove user
    }
}

module.exports = new UserService();