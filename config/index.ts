const configs = {
    localPort: 1500,
    hostName: 'localhost',
    global: {
        logging: true,
    }
};

export const enum status {
    deleted = 0,
    active = 1,
    inactive = 2
}

export default configs;