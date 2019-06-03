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
var note_model_1 = require("../models/note.model");
var base_repository_1 = require("./base.repository");
var NoteRepository = /** @class */ (function (_super) {
    __extends(NoteRepository, _super);
    function NoteRepository() {
        return _super.call(this) || this;
    }
    //todo use promise
    NoteRepository.prototype.getAll = function () {
        return note_model_1.Note
            .find({})
            .then(function () {
        })
            .catch(function (err) {
            return err;
        });
    };
    NoteRepository.prototype.getByField = function (field, value) {
        return note_model_1.Note.find({ field: value });
    };
    NoteRepository.prototype.getByUsername = function (username) {
        //todo get user notes with username
    };
    NoteRepository.prototype.getById = function (id) {
    };
    NoteRepository.prototype.add = function (note) {
        return note_model_1.Note
            .create(note)
            .then(function (created) {
            return created;
        })
            .catch(function (err) {
            //todo move to error handler
            return err;
        });
    };
    NoteRepository.prototype.delete = function (id) {
        //todo check is removed or not, promise ?
        return note_model_1.Note.remove({ id: id });
    };
    return NoteRepository;
}(base_repository_1.BaseRepository));
module.exports = new NoteRepository();
//# sourceMappingURL=note.repository.js.map