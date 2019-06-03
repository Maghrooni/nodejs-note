export default class User {
    id?: number;
    username: String;
    name: String;
    email: String;
    password: String;

    constructor(name: String, username: String, email: String, password: String, id?: number) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password; //todo has password
    }

    getUsername() {
        return this.username;
    }

    getName() {
        return this.name;
    }
}
