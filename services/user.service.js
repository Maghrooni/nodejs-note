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
            if (doc.errors) {
                throw Error(doc.errors.message);
            }
            return doc;
        })
            .catch(err => {
            throw Error(err);
        });
        //todo add log of registered user
    }
    login(user) {
        return this.repository
            .getByUserPass(user.username, user.password)
            .then((doc) => {
            //todo set last login time on user
            if (!doc) {
                throw Error('login failed');
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