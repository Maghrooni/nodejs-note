import {itemStatuses} from '../config';
import {Schema, model, Document} from 'mongoose';

let uniqueValidator = require('mongoose-unique-validator');
import validationConfig from '../config/validation';

export interface iUser {
    id?: string | number;
    username: string,
    name: string,
    email: string,
    status: number,
    password: (string | number)
}

export interface iUserDocument extends Document, iUser {
}

let userSchema = new Schema({
    name: {type: String, required: true, min: validationConfig.user.min},
    username: {type: String, unique: true, required: true, trim: true},
    email: {type: String, unique: true, required: true, trim: true},
    password: {type: String, min: validationConfig.user.password.min, required: true},
    status: {type: Number, default: itemStatuses.active},
    lastLogin: {type: Date},
    lastLoginIp: {type: String}
}, {timestamps: true});

userSchema.plugin(uniqueValidator);

export let User = model<iUserDocument>('User', userSchema);
