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
        //todo session
        //todo check autologin config
        return this.repository
            .add(user)
            .then((doc) => {
                if(doc.errors){
                    throw Error(doc.errors.message);
                }
                return doc;
            })
            .catch(err => {
                throw Error(err);
            });
        //todo add log of registered user

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
                    throw Error('login failed');
                }
                return doc;
            })
            .catch(err => {
                LogService.add({
                    title: 'Login Failed', priority: logPriorities.high, data: {
                        error: e,
                        user: user
                    }
                });
                return this.errorHandler.throwError(err);
            });
    }
}

module.exports = new UserService();