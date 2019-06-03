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
exports.User = mongoose_1.model('User', userSchema);
//# sourceMappingURL=user.model.js.map