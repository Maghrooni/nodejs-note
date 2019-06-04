"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = require("./base.service");
let NoteRepository = require('../repositories/note.repository');
class NoteService extends base_service_1.BaseService {
    constructor() {
        super();
        this.repository = NoteRepository;
    }
    add(note) {
        //todo transactions ?
        return this.repository
            .add(note)
            .then((doc) => {
            return doc;
        })
            .catch(err => {
            throw Error(err);
        });
        //todo add log of added note
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