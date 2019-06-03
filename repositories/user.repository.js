"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = require("../models/user.model");
var base_repository_1 = require("./base.repository");
var UserRepository = /** @class */ (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository() {
        var _this = _super.call(this) || this;
        _this.excludeFields = '-password';
        return _this;
    }
    //todo use promise
    UserRepository.prototype.getAll = function () {
        return user_model_1.User
            .find({ status: 1 /* active */ })
            .select(this.excludeFields)
            .then(function (found) {
            // return this.getOnlyDocumentFields(found);
            return found;
        })
            .catch(function (err) {
            return err;
        });
    };
    UserRepository.prototype.getByField = function (field, value) {
        return user_model_1.User
            .find({ field: value })
            .select(this.excludeFields)
            .then(function (found) {
            // return this.getOnlyDocumentFields(found);
            return found;
        })
            .catch(function (err) {
            return err;
        });
    };
    UserRepository.prototype.getByUserPass = function (username, password) {
        return user_model_1.User
            .findOne({
            username: username,
            password: password,
            status: 1 /* active */
        })
            .select(this.excludeFields)
            .then(function (found) {
            return found;
        })
            .catch(function (err) {
            return err;
        });
    };
    UserRepository.prototype.getById = function (id) {
        return user_model_1.User
            .findById(id)
            .then(function (found) {
            return found;
        })
            .catch(function (err) {
            return err;
        });
    };
    UserRepository.prototype.add = function (user) {
        return user_model_1.User
            .create(user)
            .then(function () {
            return user;
        })
            .catch(function (err) {
            return err;
        });
    };
    UserRepository.prototype.delete = function (id) {
        //todo check is removed or not, promise ?
        return user_model_1.User.remove({ id: id });
    };
    return UserRepository;
}(base_repository_1.BaseRepository));
module.exports = new UserRepository();
//# sourceMappingURL=user.repository.js.map