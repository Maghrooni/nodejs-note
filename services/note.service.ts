import {BaseService} from "./base.service";
import {iNote} from "../models/note.model";

let NoteRepository = require('../repositories/note.repository');

class NoteService extends BaseService {

    constructor(){
        super();
        this.repository = NoteRepository;
    }
    add(note: iNote) {
        //todo validate
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
}

module.exports = new NoteService();