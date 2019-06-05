import {itemStatuses} from '../config';
import {Schema, model, Document} from 'mongoose';
import {noteTypes} from "../config/note";
import validationConfig from '../config/validation';

export interface iNote {
    id?: string | number;
    title: string,
    type: number,
    color: string,
    status: number,
    tags: object
}

export interface iNoteDocument extends Document, iNote {
}

let noteSchema = new Schema({
    title: {type: String, required: true, min: validationConfig.user.min},
    color: String,
    type: {type: Number, default: noteTypes.general},
    status: {type: Number, default: itemStatuses.active},
    tags: [{type: String}]
}, {timestamps: true});

export let Note = model<iNoteDocument>('Note', noteSchema);