import {BaseService} from "./base.service";
import {iNote} from "../models/note.model";

let NoteRepository = require('../repositories/note.repository');
let UserRepository = require('../repositories/user.repository');

class NoteService extends BaseService {

    constructor() {
        super();
        this.repository = NoteRepository;
    }

    add(userId: string, note: iNote) {
        //todo transactions ?
        //todo validate user has permission to add note for this userId
        return this.repository
            .add(note)
            .then(doc => {
                if (doc.errors !== undefined) {
                    return this.errorHandler.throwError(doc.errors.message);
                }
                return doc;
            })
            .then(doc => {
                return UserRepository.push(userId, {notes: doc._id});
            })
            .then(doc => {
                return this.logger
                    .add({
                        title: 'new note',
                        userId: userId,
                        data: {doc}
                    });
            })
            .catch(err => {
                return this.errorHandler.throwError(err);
            });
    }

    update(id: string, updates: object) {
        return this.repository
            .update(id, updates)
            .then(updated => {
                if (updated.nModified <= 0) {
                    throw Error('');
                }
                return updated;
            })
            .catch(err => {
                return this.errorHandler.throwError(err);
            });
    }
}

module.exports = new NoteService();