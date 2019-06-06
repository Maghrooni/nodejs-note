"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module UserService
 */
const base_service_1 = require("./base.service");
const LogService = require('./log.service');
const UserRepository = require('../repositories/user.repository');
/**
 *
 */
class UserService extends base_service_1.BaseService {
    /**
     * Calls BaseService constructor
     * Set the main service repository to UserRepository
     */
    constructor() {
        super();
        this.repository = UserRepository;
    }
    /**
     *
     * Register User
     *
     * - Create user
     * - Check user has been created successfully
     * - Return created user
     *
     * @param {iUser} user
     * @returns {Promise<T>}
     */
    register(user) {
        //todo use transactions ?
        //todo session or use tokens
        //todo check autologin config
        return UserRepository
            .add(user)
            .then(doc => {
            if (doc.errors !== undefined) {
                return this.errorHandler.throwError(doc.errors.message);
            }
            return doc;
        })
            //todo fix log
            // .then(doc => {
            //     LogService.add({
            //         title: 'New User', priority: logPriorities.medium, data: {
            //             user: doc
            //         }
            //     });
            //     return doc;
            // })
            .catch(err => {
            return this.errorHandler.throwError(err);
        });
    }
    /**
     *
     * Login User
     *
     * - Find user by username and password combination
     * - Validate if user exists and is active
     * - Return found user
     *
     * @param {iUser} user
     * @param request
     * @returns {Promise<T>}
     */
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
                return this.errorHandler.throwError('failed');
            }
            return doc;
        })
            .then(doc => {
            this.repository.update(doc._id, {
                lastLogin: new Date(),
                lastLoginIp: request.headers['x-forwarded-for'] || request.connection.remoteAddress
            });
            return doc;
        })
            .catch(err => {
            return this.errorHandler.throwError(err);
        });
    }
    /**
     *
     * Update user information
     *
     * - Update the user
     * - Validate user has been modified or not
     * - Return updated user
     *
     * @param {string} id
     * @param {object} updates
     * @returns {Promise<T>}
     */
    update(id, updates) {
        return this.repository
            .update(id, updates)
            .then(updated => {
            if (updated.nModified !== 1) {
                return this.errorHandler.throwError('update failed');
            }
            return updated;
        })
            .catch(err => {
            return this.errorHandler.throwError(err);
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