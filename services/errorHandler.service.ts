class ErrorHandlerService {

    constructor() {
    }

    throwError(msg: String) {
        //todo log errors
        throw new Error(`Failed >>> ${msg}`);
    }

}

module.exports = new ErrorHandlerService();