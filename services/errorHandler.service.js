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
var ErrorHandlerService = /** @class */ (function (_super) {
    __extends(ErrorHandlerService, _super);
    function ErrorHandlerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorHandlerService.prototype.returnResponse = function () {
    };
    ErrorHandlerService.prototype.error = function (msg) {
        //todo log errors
        throw new Error("Failed >>> " + msg);
    };
    return ErrorHandlerService;
}(base_service_1.BaseService));
module.exports = new ErrorHandlerService();
//# sourceMappingURL=errorHandler.service.js.map