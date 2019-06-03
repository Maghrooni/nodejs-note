"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const validation_1 = require("../config/validation");
let noteSchema = new mongoose_1.Schema({
    title: { type: String, required: true, min: validation_1.default.user.min },
    userId: { type: Number, required: true },
    color: String,
    type: { type: Number, default: 1 /* general */ },
    status: { type: Number, default: 1 /* active */ },
}, { timestamps: true });
exports.Note = mongoose_1.model('Note', noteSchema);
//# sourceMappingURL=note.model.js.map