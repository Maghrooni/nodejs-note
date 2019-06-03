import {BaseService} from "./base.service";
import {logPriorities} from "../config/log";

let UserRepository = require('../repositories/user.repository');

class UserService extends BaseService {

    constructor() {
        super();
        this.repository = UserRepository;
    }

    //todo fix user type
    register(user: any) {
        //todo validate user data
        //todo register user
        //todo use transactions ?
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

    login(user: any) {
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