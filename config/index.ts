export enum environments {
    dev = 'dev',
    test = 'test',
    production = 'production'
}

/**
 * General Configuration settings
 *
 * @type {{localPort: number; hostName: string; environment: environments; pagination: {initialPage: number; perPage: number}; global: {logUrls: boolean; saveLogs: boolean}; database: {ip: string; dbName: string}; test: {database: {ip: string; dbName: string}}}}
 */
export const configs = {
    localPort: 1500,
    hostName: 'localhost',
    environment: environments.dev,
    pagination: {
        initialPage: 1,
        perPage: 10
    },
    global: {
        logUrls: false,
        saveLogs: true
    },
    database: {
        ip: '127.0.0.1',
        dbName: 'note',
    },
    test: {
        database: {
            ip: '127.0.0.1',
            dbName: 'test'
        }
    }
};

export function isDevEnv() {
    return configs.environment === environments.dev;
}

export function isProductionEnv() {
    return configs.environment === environments.production;
}

export const enum itemStatuses {
    deleted = 0,
    active = 1,
    inactive = 2,
}

export const enum statusCodes {
    notFound = 404,
    unauthorized = 401,
    forbidden = 403,
    validationError = 400,
    serverError = 500,
    ok = 200
}

export default configs;