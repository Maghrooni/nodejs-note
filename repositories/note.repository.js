"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const note_model_1 = require("../models/note.model");
const base_repository_1 = require("./base.repository");
const user_model_1 = require("../models/user.model");
const config_1 = require("../config");
class NoteRepository extends base_repository_1.BaseRepository {
    constructor() {
        super();
    }
    getAll(page = config_1.configs.pagination.initialPage, perPage = config_1.configs.pagination.perPage) {
        return note_model_1.Note
            .find({})
            .limit(+perPage)
            .skip(perPage * page)
            .sort({
            _id: 'desc'
        })
            .then((doc) => {
            return doc;
        })
            .catch(err => {
            throw Error(err);
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
            throw Error(err);
        });
    }
    add(note) {
        return note_model_1.Note
            .create(note)
            .then((doc) => {
            return doc;
        })
            .catch(err => {
            throw Error(err);
        });
    }
    delete(id) {
        //todo check is removed or not, promise ?
        return note_model_1.Note.remove({ _id: id });
    }
    deleteUserNotes(userId) {
        return note_model_1.Note.remove({ userId: userId });
    }
}
module.exports = new NoteRepository();
//# sourceMappingURL=note.repository.js.map