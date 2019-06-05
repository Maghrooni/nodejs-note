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
                    throw Error(doc.errors.message);
                }
                return UserRepository.push(userId, {notes: doc._id});
            })
            .catch(err => {
                throw Error(err);
            });
        //todo add log of added note
    }

    private createNote(note: iNote) {
        return this.repository
            .add(note)
            .then((doc) => {
                if (doc.errors !== undefined) {
                    throw Error(doc.errors.message);
                }
                return doc;
            })
            .catch(err => {
                throw Error(err);
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
                throw Error(err);
            });
    }
}

module.exports = new NoteService();