import {iNote, Note} from '../models/note.model'
import {BaseRepository} from "./base.repository";
import {User} from "../models/user.model";
import {configs} from "../config";


class NoteRepository extends BaseRepository {

    constructor() {
        super();
    }

    getAll(page: number = configs.pagination.initialPage, perPage: number = configs.pagination.perPage) {
        return Note
            .find({})
            .limit(+perPage)
            .skip(perPage * page)
            .sort({
                _id: 'desc'
            })
            .then(doc => {
                return doc;
            })
            .catch(err => {
                throw Error(err);
            });
    }

    getByUsername(username: string) {
        //todo get user notes with username
    }

    getById(id: string) {
        return User
            .findById(id)
            .then(doc => {
                return doc;
            })
            .catch(err => {
                throw Error(err);
            });
    }

    add(note: iNote) {
        return Note
            .create(note)
            .then(doc => {
                return doc;
            })
            .catch(err => {
                throw Error(err);
            });
    }

    delete(id: string) {
        //todo check is removed or not, promise ?
        return Note.remove({_id: id});
    }

    deleteUserNotes(userId: string) {
        return Note.remove({userId: userId});
    }

}

module.exports = new NoteRepository();