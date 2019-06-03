import {User} from '../models/user.model'
import {BaseRepository} from "./base.repository";


class UserRepository extends BaseRepository {

    constructor() {
        super();
    }

    //todo use promise
    getAll() {
        return User.find({}).select('name email');
    }

    getByField(field: String, value: Number | String) {
        return User.find({field: value});
    }

    getById(id: Number) {

    }

    add(user: User) {
        User.create(user);
        return user;
    }

    delete(id: Number) {
        //todo check is removed or not, promise ?
        return User.remove({id: id});
    }

}

module.exports = new UserRepository();