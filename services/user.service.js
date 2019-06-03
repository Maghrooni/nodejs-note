"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = require("./base.service");
let UserRepository = require('../repositories/user.repository');
class UserService extends base_service_1.BaseService {
    constructor() {
        super();
        this.repository = UserRepository;
    }
    //todo fix user type
    register(user) {
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
    login(user) {
        return this.repository
            .getByUserPass(user.username, user.password)
            .then((found) => {
            try {
                if (!found) {
                    //todo support multilingual messages
                    throw new Error('user not found');
                }
                //todo set session ?
                return found;
            }
            catch (e) {
                return this.errorHandler.throwError(e, {
                    title: 'Login Failed', priority: 3 /* high */, data: {
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
//# sourceMappingURL=user.service.js.map