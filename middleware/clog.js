// Customer middleware which logs the type and path of each request to the server
const clog = (req, res, next) => {
    const fgGreen = "\x1b[32m";
    const fgCyan = "\x1b[36m";
    const fgYellow = "\x1b[33m";
    const fgRed = "\x1b[31m"
    switch (req.method) {
        case 'GET': {
            console.info(`${fgGreen}${req.method} request to ${req.path}`);
            break;
        }
        case 'POST': {
            console.info(`${fgCyan}${req.method} request to ${req.path}`);
            break;
        }
        case 'DELETE': {
            console.info(`${fgRed}${req.method} request to ${req.path}`);
            break;
        }
        default:
            console.log(`${fgYellow}${req.method} request to ${req.path}`);
    }

    next();
};

exports.clog = clog;