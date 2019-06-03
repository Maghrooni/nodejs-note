"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseRepository {
    constructor() {
    }
    getOnlyDocumentFields(cursor) {
        let items = {};
        cursor.forEach(function (item) {
            items[item._id] = item._doc;
        });
        return items;
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map