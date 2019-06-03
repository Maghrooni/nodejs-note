import {itemStatuses} from '../config';
import {logTypes, logPriorities} from "../config/log";
import {Schema, model, Document} from 'mongoose';

export interface iLog {
    id?: number | string,
    title: string,
    userId?: number,
    type: number,
    priority: number,
    data: object,
    status: number
}

export interface iLogDocument extends Document, iLog {
}

let noteSchema = new Schema({
    title: {type: String, required: true},
    userId: {type: Number},
    type: {type: Number, default: logTypes.general},
    priority: {type: Number, default: logPriorities.low},
    data: {type: Array},
    status: {type: Number, default: itemStatuses.active},
}, {timestamps: true});

export let Log = model<iLogDocument>('Log', noteSchema);
