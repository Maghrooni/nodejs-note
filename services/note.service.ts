import {BaseService} from "./base.service";
import {iNote} from "../models/note.model";

let NoteRepository = require('../repositories/note.repository');

class NoteService extends BaseService {

    constructor() {
        super();
        this.repository = NoteRepository;
    }

    add(note: iNote) {
        //todo transactions ?
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
        //todo add log of added note

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