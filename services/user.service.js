"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = require("./base.service");
let LogService = require('./log.service');
let UserRepository = require('../repositories/user.repository');
class UserService extends base_service_1.BaseService {
    constructor() {
        super();
        this.repository = UserRepository;
    }
    register(user) {
        //todo validate user data
        //todo use transactions ?
        //todo session
        //todo check autologin config
        return this.repository
            .add(user)
            .then((doc) => {
            return doc;
        })
            .catch(err => {
            return err;
        });
        //todo add log of registered user
    }
    login(user) {
        return this.repository
            .getByUserPass(user.username, user.password)
            .then((doc) => {
            //todo set last login time on user
            if (!doc) {
                return Promise.reject('incorrect login');
            }
            return doc;
        })
            .catch(err => {
            LogService.add({
                title: 'Login Failed', priority: 3 /* high */, data: {
                    error: e,
                    user: user
                }
            });
            return this.errorHandler.throwError(err);
        });
    }
}
module.exports = new UserService();
//# sourceMappingURL=user.service.js.map