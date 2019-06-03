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
        //todo validate
        //todo transactions ?
        return this.repository
            .add(note)
            .then(() => {
            return note;
        })
            .catch(err => {
            return this.errorHandler.throwError(err);
        });
        //todo add log of added note
    }
}
module.exports = new NoteService();
//# sourceMappingURL=note.service.js.map