import {User} from '../models/user.model'
import {BaseRepository} from "./base.repository";


export default class UserRepository extends BaseRepository {

    constructor() {
        super();
    }

    //todo use promise
    getAll() {
        return User.find({});
    }

    getByField(field: String, value: Number | String) {
        return User.find({field: value});
    }

    getById(id: Number) {

    }

    add(user: User) {
        User.create(user);
    }

}