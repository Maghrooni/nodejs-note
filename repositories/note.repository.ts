import {iNote, Note} from '../models/note.model'
import {BaseRepository} from "./base.repository";


class NoteRepository extends BaseRepository {

    constructor() {
        super();
    }

    //todo use promise
    getAll() {
        return Note
            .find({})
            .then(()=>{

            })
            .catch(err => {
                return err;
            });
    }

    getByField(field: String, value: Number | String) {
        return Note.find({field: value});
    }

    getByUsername(username: String) {
        //todo get user notes with username
    }

    getById(id: Number) {

    }

    add(note: iNote) {
        return Note
            .create(note)
            .then((created) => {
                return created;
            })
            .catch(err => {
                //todo move to error handler
                return err;
            });
    }

    delete(id: Number) {
        //todo check is removed or not, promise ?
        return Note.remove({id: id});
    }

}

module.exports = new NoteRepository();