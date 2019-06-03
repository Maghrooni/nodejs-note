var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService() {
    }
    ErrorHandlerService.prototype.throwError = function (msg) {
        //todo log errors
        throw new Error("Failed >>> " + msg);
    };
    return ErrorHandlerService;
}());
module.exports = new ErrorHandlerService();
//# sourceMappingURL=errorHandler.service.js.map