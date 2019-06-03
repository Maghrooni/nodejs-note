import {itemStatuses} from '../config';
import {noteTypes} from "../config/note";

export default class noteModel {
    id?: number;
    title: String;
    userId: Number;
    type: Number;
    color: String;
    status: Number;

    constructor(title: String, userId: Number, type: Number = noteTypes.general, color: String, status: Number = itemStatuses.active, id?: number) {
        this.id = id;
        this.title = title;
        this.userId = userId;
        this.type = type;
        this.status = status;
        this.color = color;
    }

}
