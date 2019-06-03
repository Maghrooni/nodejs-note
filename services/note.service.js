"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_service_1 = require("./base.service");
var NoteRepository = require('../repositories/note.repository');
var NoteService = /** @class */ (function (_super) {
    __extends(NoteService, _super);
    function NoteService() {
        var _this = _super.call(this) || this;
        _this.repository = NoteRepository;
        return _this;
    }
    //todo fix user type
    NoteService.prototype.add = function (note) {
        var _this = this;
        //todo validate
        //todo transactions ?
        return this.repository
            .add(note)
            .then(function () {
            return note;
        })
            .catch(function (err) {
            return _this.errorHandler.throwError(err);
        });
        //todo add log of added note
    };
    return NoteService;
}(base_service_1.BaseService));
module.exports = new NoteService();
//# sourceMappingURL=note.service.js.map