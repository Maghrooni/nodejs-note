import {BaseService} from "./base.service";

let UserRepository = require('../repositories/user.repository');
let ErrorHandler = require('../services/errorHandler.service');


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
                return ErrorHandler.error(err);
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
                    return ErrorHandler.error(e);
                }
            })
            .catch(err => {
                return ErrorHandler.error(err);
            });
    }
}

module.exports = new UserService();