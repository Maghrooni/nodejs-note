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
        //todo use transactions ?
        //todo session or use tokens
        //todo check autologin config
        return this.repository
            .add(user)
            .then(doc => {
            if (doc.errors !== undefined) {
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
    login(user, request) {
        return this.repository
            .getByUserPass(user.username, user.password)
            .then(doc => {
            if (!doc) {
                LogService.add({
                    title: 'Login Failed', priority: 3 /* high */, data: {
                        error: e,
                        user: user
                    }
                });
                throw Error('login failed');
            }
            this.repository.update(doc._id, {
                lastLogin: new Date(),
                lastLoginIp: request.headers['x-forwarded-for'] || request.connection.remoteAddress
            });
            return doc;
        })
            .catch(err => {
            throw Error(err);
        });
    }
    update(id, updates) {
        return this.repository
            .update(id, updates)
            .then(updated => {
            if (updated.nModified <= 0) {
                throw Error('');
            }
            return updated;
        })
            .catch(err => {
            throw Error(err);
        });
    }
    remove(id) {
        //todo check document exists !
        //todo get document
        //todo remove notes
        //todo remove user
    }
}
module.exports = new UserService();
//# sourceMappingURL=user.service.js.map