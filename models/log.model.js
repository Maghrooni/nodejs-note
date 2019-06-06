"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let noteSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    userId: { type: String },
    type: { type: Number, default: 1 /* general */ },
    priority: { type: Number, default: 1 /* low */ },
    data: { type: Array },
    status: { type: Number, default: 1 /* active */ },
}, { timestamps: true });
exports.Log = mongoose_1.model('Log', noteSchema);
//# sourceMappingURL=log.model.js.map