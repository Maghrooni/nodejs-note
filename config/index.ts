const configs = {
    localPort: 1500,
    hostName: 'localhost',
    global: {
        logging: false,
    },
    database: {
        ip: '127.0.0.1',
        dbName: 'note'
    },
};

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