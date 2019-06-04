import {iNote, Note} from '../models/note.model'
import {BaseRepository} from "./base.repository";
import {User} from "../models/user.model";


class NoteRepository extends BaseRepository {

    constructor() {
        super();
    }

    getAll() {
        return Note
            .find({})
            .then((doc) => {
                return doc;
            })
            .catch(err => {
                return err;
            });
    }

    getByUsername(username: string) {
        //todo get user notes with username
    }

    getById(id: string) {
        return User
            .findById(id)
            .then((doc) => {
                return doc;
            })
            .catch(err => {
                return err;
            });
    }

    add(note: iNote) {
        return Note
            .create(note)
            .then((doc) => {
                return doc;
            })
            .catch(err => {
                return err;
            });
    }

    delete(id: string) {
        //todo check is removed or not, promise ?
        return Note.remove({id: id});
    }

    deleteUserNotes(userId: string){
        return Note.remove({userId: userId});
    }

}

module.exports = new NoteRepository();