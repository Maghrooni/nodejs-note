import {ExpressMiddlewareInterface} from 'routing-controllers';
import {logPriorities} from "../config/log";

const logger = require('../services/log.service');
const logginServ = new logger().getInstance();

export class LoggerMiddleware implements ExpressMiddlewareInterface {
    use(request: any, response: any, next?: (err?: any) => any): any {
        logginServ.add({
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