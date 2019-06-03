enum environments {
    dev = 'dev',
    test = 'test',
    production = 'production'
}

export const configs = {
    localPort: 1500,
    hostName: 'localhost',
    environment: environments.production,
    global: {
        logUrls: false,
        saveLogs: true
    },
    database: {
        ip: '127.0.0.1',
        dbName: 'note'
    },
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
    validationError = 400,
    serverError = 500
}

export default configs;