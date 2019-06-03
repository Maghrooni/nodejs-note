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

    getByUserPass(username: String, password: (Number | String)) {
        return User.findOne({
            username: username,
            password: password
        });
    }

    getById(id: Number) {

    }

    add(user: User) {
        return User
            .create(user)
            .then(() => {
                return user;
            })
            .catch(err => {
                //todo move to error handler
                return err;
            });
    }

    delete(id: Number) {
        //todo check is removed or not, promise ?
        return User.remove({id: id});
    }

}

module.exports = new UserRepository();