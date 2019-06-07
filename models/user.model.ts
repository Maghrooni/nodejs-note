import {itemStatuses} from '../config';
import {Schema, model, Document} from 'mongoose';
import validationConfig from '../config/validation';

const uniqueValidator = require('mongoose-unique-validator');
const validator = require('validator');

export interface iUser {
    username: string,
    name: string,
    email: string,
    status: number,
    password: string,
    notes: object,
    tokens: object
}

export interface iUserDocument extends Document, iUser {
}

let userSchema = new Schema({
    name: {type: String, required: true, minLength: validationConfig.user.min},
    username: {type: String, unique: true, required: true, trim: true},
    email: {
        type: String, unique: true, required: true, trim: true, validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String, required: true,
        validate: {
            validator: (value) => {
                return value.length >= validationConfig.user.password.min;
            },
            message: `password must have at least ${validationConfig.user.password.min} numbers`
        }
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }],
    status: {type: Number, default: itemStatuses.active},
    lastLogin: {type: Date},
    lastLoginIp: {type: String},
    notes: [{type: Schema.Types.ObjectId, ref: 'Note'}]
}, {timestamps: true});

userSchema.plugin(uniqueValidator);

export let User = model<iUserDocument>('User', userSchema);
