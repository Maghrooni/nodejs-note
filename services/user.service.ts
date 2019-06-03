import {BaseService} from "./base.service";

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
                return this.errorHandler.error(err);
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
                    return this.errorHandler.error(e);
                }
            })
            .catch(err => {
                return this.errorHandler.error(err);
            });
    }
}

module.exports = new UserService();