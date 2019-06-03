import {itemStatuses} from '../config';
import {logTypes} from "../config/log";

export default class noteModel {
    id?: number;
    title: String;
    userId: Number;
    type: Number;
    data: Object;
    status: Number;

    constructor(title: String, userId: Number, type: Number = logTypes.general, data: Object, status: Number = itemStatuses.active, id?: number) {
        this.id = id;
        this.title = title;
        this.userId = userId;
        this.type = type;
        this.status = status;
        this.data = data;
    }

}
