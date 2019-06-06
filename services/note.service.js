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
                return this.errorHandler.throwError(doc.errors.message);
            }
            return doc;
        })
            .then(doc => {
            return UserRepository.push(userId, { notes: doc._id });
        })
            .then(doc => {
            return this.logger
                .add({
                title: 'new note',
                userId: userId,
                data: { doc }
            });
        })
            .catch(err => {
            return this.errorHandler.throwError(err);
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
            return this.errorHandler.throwError(err);
        });
    }
}
module.exports = new NoteService();
//# sourceMappingURL=note.service.js.map