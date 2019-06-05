import {ExpressMiddlewareInterface} from 'routing-controllers';
import {logPriorities} from "../config/log";

let LogService = require('../services/log.service');

export class LoggerMiddleware implements ExpressMiddlewareInterface {
    use(request: any, response: any, next?: (err?: any) => any): any {
        LogService.add({
            title: 'Logger', priority: logPriorities.medium, data: {
                body: response.body,
                request: {
                    host: request.headers.host,
                    url: request.url,
                    method: request.method,
                    query: request.query,
                    params: request.params
                }
            }
        });
        next();
    }

}