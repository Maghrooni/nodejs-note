"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseRepository = /** @class */ (function () {
    function BaseRepository() {
    }
    BaseRepository.prototype.getOnlyDocumentFields = function (cursor) {
        var items = {};
        cursor.forEach(function (item) {
            items[item._id] = item._doc;
        });
        return items;
    };
    return BaseRepository;
}());
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map