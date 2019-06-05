"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = require("./base.service");
let NoteRepository = require('../repositories/note.repository');
let UserRepository = require('../repositories/user.repository');
class NoteService extends base_service_1.BaseService {
    constructor() {
        super();
        this.repository = NoteRepository;
    }
    add(userId, note) {
        //todo transactions ?
        //todo validate user has permission to add note for this userId
        return this.repository
            .add(note)
            .then(doc => {
            if (doc.errors !== undefined) {
                throw Error(doc.errors.message);
            }
            return UserRepository.push(userId, { notes: doc._id });
        })
            .catch(err => {
            throw Error(err);
        });
        //todo add log of added note
    }
    createNote(note) {
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
    update(id, updates) {
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
//# sourceMappingURL=note.service.js.map