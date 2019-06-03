import {BaseService} from "./base.service";
import {logPriorities} from "../config/log";
import {iUser} from "../models/user.model";

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
            .then(() => {
                return user;
            })
            .catch(err => {
                return this.errorHandler.throwError(err);
            });
        //todo add log of registered user

    }

    login(user: iUser) {
        return this.repository
            .getByUserPass(
                user.username,
                user.password
            )
            .then((found) => {
                try {
                    if (!found) {
                        //todo support multilingual messages
                        throw new Error('user not found')
                    }
                    //todo set session ?
                    return found;
                } catch (e) {
                    return this.errorHandler.throwError(e, {
                        title: 'Login Failed', priority: logPriorities.high, data: {
                            error: e,
                            user: user
                        }
                    });
                }
            })
            .catch(err => {
                return this.errorHandler.throwError(err);
            });
    }
}

module.exports = new UserService();