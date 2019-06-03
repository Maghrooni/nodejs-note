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
var log_model_1 = require("../models/log.model");
var base_repository_1 = require("./base.repository");
var LogRepository = /** @class */ (function (_super) {
    __extends(LogRepository, _super);
    function LogRepository() {
        return _super.call(this) || this;
    }
    //todo use promise
    LogRepository.prototype.getAll = function () {
        return log_model_1.Log
            .find({})
            .then(function (found) {
            return found;
        })
            .catch(function (err) {
            return err;
        });
    };
    LogRepository.prototype.getByField = function (field, value) {
        return log_model_1.Log.find({ field: value });
    };
    LogRepository.prototype.getById = function (id) {
    };
    LogRepository.prototype.add = function (log) {
        return log_model_1.Log
            .create(log)
            .then(function (created) {
            return created;
        })
            .catch(function (err) {
            return err;
        });
    };
    LogRepository.prototype.delete = function (id) {
        //todo check is removed or not, promise ?
        return log_model_1.Log.remove({ id: id });
    };
    return LogRepository;
}(base_repository_1.BaseRepository));
module.exports = new LogRepository();
//# sourceMappingURL=log.repository.js.map