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
        //todo session or use tokens
        //todo check autologin config
        return this.repository
            .add(user)
            .then((doc) => {
            if (doc.errors) {
                throw Error(doc.errors.message);
            }
            LogService.add({
                title: 'New User', priority: 2 /* medium */, data: {
                    user: doc
                }
            });
            return doc;
        })
            .catch(err => {
            throw Error(err);
        });
    }
    login(user) {
        return this.repository
            .getByUserPass(user.username, user.password)
            .then((doc) => {
            //todo set last login time on user
            if (!doc) {
                LogService.add({
                    title: 'Login Failed', priority: 3 /* high */, data: {
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
}
module.exports = new UserService();
//# sourceMappingURL=user.service.js.map