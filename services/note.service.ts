import {BaseService} from "./base.service";

let NoteRepository = require('../repositories/note.repository');
let ErrorHandler = require('../services/errorHandler.service');


class NoteService extends BaseService {

    //todo fix user type
    add(note: any) {
        //todo validate
        //todo transactions ?
        return NoteRepository
            .add(note)
            .then(() => {
                return note;
            })
            .catch(err => {
                return ErrorHandler.error(err);
            });
        //todo add log of added note

    }
}

module.exports = new NoteService();