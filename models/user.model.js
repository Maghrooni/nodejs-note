"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var validation_1 = require("../config/validation");
var userSchema = new mongoose_1.Schema({
    name: { type: String, required: true, min: validation_1.default.user.min },
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, min: validation_1.default.user.password.min, required: true },
    status: { type: Number, default: 1 /* active */ },
}, { timestamps: true });
var userModel = /** @class */ (function () {
    function userModel(name, username, email, password, status, id) {
        if (status === void 0) { status = 1 /* active */; }
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.status = status;
        this.password = password; //todo hash password
    }
    //todo move to repository
    userModel.prototype.getUsername = function () {
        return this.username;
    };
    userModel.prototype.getName = function () {
        return this.name;
    };
    return userModel;
}());
exports.default = userModel;
//# sourceMappingURL=user.model.js.map