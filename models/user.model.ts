import {itemStatuses} from '../config';

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
