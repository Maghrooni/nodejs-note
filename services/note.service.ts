import {BaseService} from "./base.service";

let NoteRepository = require('../repositories/note.repository');

class NoteService extends BaseService {

    constructor(){
        super();
        this.repository = NoteRepository;
    }
    //todo fix user type
    add(note: any) {
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