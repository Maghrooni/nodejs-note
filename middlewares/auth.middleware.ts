import {ExpressMiddlewareInterface} from 'routing-controllers';
import userConfigs from "../config/user.config";

const UserService = require('../services/user.service');

export class AuthMiddleware implements ExpressMiddlewareInterface {
    use(request: any, response: any, next?: (err?: any) => any): any {
        UserService
            .getByToken(request.header(userConfigs.auth.header))
            .then(doc => {
                return next();
            })
            .catch(err => {
                return next(err);
            });
    }

}