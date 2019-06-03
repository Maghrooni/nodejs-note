import {iNote, Note} from '../models/note.model'
import {BaseRepository} from "./base.repository";
import {User} from "../models/user.model";


class NoteRepository extends BaseRepository {

    constructor() {
        super();
    }

    //todo use promise
    getAll() {
        return Note
            .find({})
            .then((found) => {
                return found;
            })
            .catch(err => {
                return err;
            });
    }

    getByField(field: String, value: Number | String) {
        return Note
            .find({field: value})
            .then((found) => {
                return found;
            })
            .catch(err => {
                return err;
            });
    }

    getByUsername(username: String) {
        //todo get user notes with username
    }

    getById(id: string) {
        return User
            .findById(id)
            .then((found) => {
                return found;
            })
            .catch(err => {
                return err;
            });
    }

    add(note: iNote) {
        return Note
            .create(note)
            .then((created) => {
                return created;
            })
            .catch(err => {
                return err;
            });
    }

    delete(id: Number) {
        //todo check is removed or not, promise ?
        return Note.remove({id: id});
    }

}

module.exports = new NoteRepository();