import {BaseService} from "./base.service";
import {json} from "body-parser";

class ErrorHandlerService extends BaseService {

    private returnResponse() {

    }

    error(msg: String) {
        //todo log errors
        throw new Error(`Failed >>> ${msg}`);
    }

}

module.exports = new ErrorHandlerService();