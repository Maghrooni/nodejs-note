import {itemStatuses} from '../config';
import {Schema, model, Document} from 'mongoose';
import validationConfig from '../config/validation';

export interface iUser {
    id?: number,
    username: String,
    name: String,
    email: String,
    status: Number,
    password: (String | Number)
}

let userSchema = new Schema({
    name: {type: String, required: true, min: validationConfig.user.min},
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, min: validationConfig.user.password.min, required: true},
    status: {type: Number, default: itemStatuses.active},
}, {timestamps: true});

export default class userModel {
    id?: number;
    username: String;
    name: String;
    email: String;
    status: Number;
    password: (String | Number);

    constructor(name: String, username: String, email: String, password: String | Number, status: Number = itemStatuses.active, id?: number) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.status = status;
        this.password = password; //todo hash password
    }

    //todo move to repository
    getUsername() {
        return this.username;
    }

    getName() {
        return this.name;
    }
}
