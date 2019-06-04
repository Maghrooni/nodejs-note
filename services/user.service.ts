import {BaseService} from "./base.service";
import {logPriorities} from "../config/log";
import {iUser} from "../models/user.model";
import {rejects} from "assert";

let LogService = require('./log.service');

let UserRepository = require('../repositories/user.repository');

class UserService extends BaseService {

    constructor() {
        super();
        this.repository = UserRepository;
    }

    register(user: iUser) {
        //todo validate user data
        //todo use transactions ?
        //todo session or use tokens
        //todo check autologin config
        return this.repository
            .add(user)
            .then((doc) => {
                if (doc.errors) {
                    throw Error(doc.errors.message);
                }
                LogService.add({
                    title: 'New User', priority: logPriorities.medium, data: {
                        user: doc
                    }
                });
                return doc;
            })
            .catch(err => {
                throw Error(err);
            });
    }

    login(user: iUser) {
        return this.repository
            .getByUserPass(
                user.username,
                user.password
            )
            .then((doc) => {
                //todo set last login time on user
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
}

module.exports = new UserService();