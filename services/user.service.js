"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module UserService
 */
const base_service_1 = require("./base.service");
const user_config_1 = require("../config/user.config");
const Jwt = require('jsonwebtoken');
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
     * - Logs registered user
     * - Return created user
     *
     * @param {iUser} user
     * @returns {Promise<T>}
     */
    register(user) {
        //todo use transactions ?
        //todo session or use tokens
        //todo check autologin config
        user.password = "" + user.password;
        let document;
        return UserRepository
            .add(user)
            .then(doc => {
            if (doc.errors !== undefined) {
                return this.errorHandler.throwError(doc.errors.message);
            }
            document = doc;
            return doc;
        })
            .then(doc => {
            this.logger.add({
                title: 'New User', priority: 2 /* medium */, data: {
                    user: doc
                }
            });
            return doc;
        })
            .then(doc => {
            return this.setAuthToken(doc._id, this.getAuthToken(doc._id));
        })
            .then(token => {
            document.tokens = token.tokens;
            return document;
        })
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
                this.logger.add({
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
    /**
     * Generate Auth token with User ID
     *
     * @param {string} userId
     * @returns {string}
     */
    getAuthToken(userId) {
        return Jwt.sign({ _id: userId, access: user_config_1.default.auth.access }, user_config_1.default.auth.salt).toString();
    }
    /**
     * Get User by token
     *
     * @param {string} token
     * @returns {Promise<T>}
     */
    getByToken(token) {
        return this.verifyJwt(token)
            .then(decoded => {
            return UserRepository
                .getByToken(decoded._id, token, user_config_1.default.auth.access);
        })
            .then(doc => {
            return doc;
        })
            .catch(err => {
            this.logger.add({
                title: 'invalid auth', priority: 3 /* high */, data: {
                    error: err,
                    token: token
                }
            });
            return this.errorHandler.throwError(err);
        });
    }
    /**
     * Verify JWT token
     *
     * @param {string} token
     * @returns {any}
     */
    verifyJwt(token) {
        try {
            return new Promise((resolve, reject) => {
                return resolve(Jwt.verify(token, user_config_1.default.auth.salt));
            });
        }
        catch (e) {
            return new Promise((resolve, reject) => {
                return reject();
            });
        }
    }
    /**
     * Set Generated Token on User
     *
     * @param {string} userId
     * @param {string} token
     * @returns {Promise<T>}
     */
    setAuthToken(userId, token) {
        const tokens = { tokens: { access: user_config_1.default.auth.access, token: token } };
        return this.repository
            .push(userId, tokens)
            .then(updated => {
            if (updated.nModified !== 1) {
                return this.errorHandler.throwError('update failed');
            }
            return tokens;
        })
            .catch(err => {
            return this.errorHandler.throwError(err);
        });
    }
}
module.exports = new UserService();
//# sourceMappingURL=user.service.js.map