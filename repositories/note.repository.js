"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const note_model_1 = require("../models/note.model");
const base_repository_1 = require("./base.repository");
const user_model_1 = require("../models/user.model");
class NoteRepository extends base_repository_1.BaseRepository {
    constructor() {
        super();
    }
    getAll() {
        return note_model_1.Note
            .find({})
            .then((doc) => {
            return doc;
        })
            .catch(err => {
            return err;
        });
    }
    getByUsername(username) {
        //todo get user notes with username
    }
    getById(id) {
        return user_model_1.User
            .findById(id)
            .then((doc) => {
            return doc;
        })
            .catch(err => {
            return err;
        });
    }
    add(note) {
        return note_model_1.Note
            .create(note)
            .then((doc) => {
            return doc;
        })
            .catch(err => {
            return err;
        });
    }
    delete(id) {
        //todo check is removed or not, promise ?
        return note_model_1.Note.remove({ id: id });
    }
    deleteUserNotes(userId) {
        return note_model_1.Note.remove({ userId: userId });
    }
}
module.exports = new NoteRepository();
//# sourceMappingURL=note.repository.js.map