import {itemStatuses} from '../config';
import {Schema, model, Document} from 'mongoose';
import {noteTypes} from "../config/note";
import validationConfig from '../config/validation';

export interface iNote {
    id?: string | number;
    title: String,
    userId: Number,
    type: Number,
    color: String,
    status: Number
}

export interface iNoteDocument extends Document, iNote {
}

let noteSchema = new Schema({
    title: {type: String, required: true, min: validationConfig.user.min},
    userId: {type: Number, required: true},
    color: String,
    type: {type: Number, default: noteTypes.general},
    status: {type: Number, default: itemStatuses.active},
}, {timestamps: true});

export let Note = model<iNoteDocument>('Note', noteSchema);