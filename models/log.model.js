"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var noteSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    userId: { type: Number },
    type: { type: Number, default: 1 /* general */ },
    priority: { type: Number, default: 1 /* low */ },
    data: { type: Array },
    status: { type: Number, default: 1 /* active */ },
}, { timestamps: true });
exports.Log = mongoose_1.model('Log', noteSchema);
//# sourceMappingURL=log.model.js.map