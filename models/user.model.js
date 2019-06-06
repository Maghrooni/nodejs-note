"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const validation_1 = require("../config/validation");
const uniqueValidator = require('mongoose-unique-validator');
const validator = require('validator');
let userSchema = new mongoose_1.Schema({
    name: { type: String, required: true, minLength: validation_1.default.user.min },
    username: { type: String, unique: true, required: true, trim: true },
    email: {
        type: String, unique: true, required: true, trim: true, validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String, required: true,
        validate: {
            validator: (value) => {
                return value.length >= validation_1.default.user.password.min;
            },
            message: `password must has at least ${validation_1.default.user.password.min} numbers`
        }
    },
    status: { type: Number, default: 1 /* active */ },
    lastLogin: { type: Date },
    lastLoginIp: { type: String },
    notes: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Note' }]
}, { timestamps: true });
userSchema.plugin(uniqueValidator);
exports.User = mongoose_1.model('User', userSchema);
//# sourceMappingURL=user.model.js.map