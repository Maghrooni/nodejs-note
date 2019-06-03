"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var noteModel = /** @class */ (function () {
    function noteModel(title, userId, type, color, status, id) {
        if (type === void 0) { type = 1 /* general */; }
        if (status === void 0) { status = 1 /* active */; }
        this.id = id;
        this.title = title;
        this.userId = userId;
        this.type = type;
        this.status = status;
        this.color = color;
    }
    return noteModel;
}());
exports.default = noteModel;
//# sourceMappingURL=note.model.js.map