import {BaseService} from "./base.service";

let UserRepository = require('../repositories/user.repository');
let ErrorHandler = require('../services/errorHandler.service');


class UserService extends BaseService {

    //todo fix user type
    register(user: any) {
        //todo validate user data
        //todo register user
        //todo use transactions ?
        return UserRepository
            .add(user)
            .then(() => {
                return user;
            })
            .catch(err => {
                return ErrorHandler.error(err);
            });
        //todo add log of registered user

    }
}

module.exports = new UserService();