import {iNote, Note} from '../models/note.model'
import {BaseRepository} from "./base.repository";
import {User} from "../models/user.model";
import {configs, itemStatuses} from "../config";


class NoteRepository extends BaseRepository {

    constructor() {
        super();
    }

    getAll(page: number = configs.pagination.initialPage, perPage: number = configs.pagination.perPage) {
        return Note
            .find({})
            .limit(+perPage)
            .skip(perPage * page)
            .sort({
                _id: 'desc'
            })
            .then(doc => {
                return doc;
            })
            .catch(err => {
                throw Error(err);
            });
    }

    getByUsername(username: string) {
        return User
            .find({username: username, status: itemStatuses.active})
            .select('username name')
            .populate('notes', 'title tags color type', {status: itemStatuses.active})
            .sort({
                title: 'asc'
            })
            .then(docs => {
                return docs;
            })
            .catch(err => {
                throw Error(err);
            });
    }

    getByTag(tag: string) {
        return Note
        //or tags: {'$in': [tag]}
            .find({tags: tag, status: itemStatuses.active})
            .select('title tags color type')
            .sort({
                title: 'asc'
            })
            .then(docs => {
                return docs;
            })
            .catch(err => {
                throw Error(err);
            });
    }

    getById(id: string) {
        return Note
            .findById(id)
            .then(doc => {
                return doc;
            })
            .catch(err => {
                throw Error(err);
            });
    }

    add(note: iNote) {
        return Note
            .create(note)
            .then(doc => {
                return doc;
            })
            .catch(err => {
                throw Error(err);
            });
    }

    push(id: string, push: object) {
        return Note
            .updateOne({_id: id}, {'$push': push})
            .then(doc => {
                return doc;
            })
            .catch(err => {
                throw Error(err);
            });
    }

    delete(id: string) {
        //todo check is removed or not, promise ?
        return Note.remove({_id: id});
    }

    deleteUserNotes(userId: string) {
        return Note.remove({userId: userId});
    }

}

module.exports = new NoteRepository();