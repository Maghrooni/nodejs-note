"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let uniqueValidator = require('mongoose-unique-validator');
const validation_1 = require("../config/validation");
let userSchema = new mongoose_1.Schema({
    name: { type: String, required: true, min: validation_1.default.user.min },
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, min: validation_1.default.user.password.min, required: true },
    status: { type: Number, default: 1 /* active */ },
    lastLogin: { type: Date },
    lastLoginIp: { type: String }
}, { timestamps: true });
userSchema.plugin(uniqueValidator);
exports.User = mongoose_1.model('User', userSchema);
//# sourceMappingURL=user.model.js.map