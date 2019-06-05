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
            .then(doc => {
            return doc;
        })
            .catch(err => {
            return this.errorHandler.throwError(err);
        });
    }
    getByUsername(username) {
        return user_model_1.User
            .find({ username: username, status: 1 /* active */ })
            .select('username name')
            .populate('notes', 'title tags color type', { status: 1 /* active */ })
            .sort({
            title: 'asc'
        })
            .then(docs => {
            return docs;
        })
            .catch(err => {
            return this.errorHandler.throwError(err);
        });
    }
    getByTag(tag) {
        return note_model_1.Note
            //or tags: {'$in': [tag]}
            .find({ tags: tag, status: 1 /* active */ })
            .select('title tags color type')
            .sort({
            title: 'asc'
        })
            .then(docs => {
            return docs;
        })
            .catch(err => {
            return this.errorHandler.throwError(err);
        });
    }
    getById(id) {
        return note_model_1.Note
            .findById(id)
            .then(doc => {
            return doc;
        })
            .catch(err => {
            return this.errorHandler.throwError(err);
        });
    }
    add(note) {
        return note_model_1.Note
            .create(note)
            .then(doc => {
            return doc;
        })
            .catch(err => {
            return this.errorHandler.throwError(err);
        });
    }
    push(id, push) {
        return note_model_1.Note
            .updateOne({ _id: id }, { '$push': push })
            .then(doc => {
            return doc;
        })
            .catch(err => {
            return this.errorHandler.throwError(err);
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