const moment = require('moment');

function subscriber(name) {
    return {
        next: msg => logMessage(msg, 'next', name),
        error: err => logMessage(err, 'error', name),
        complete: () => logMessage('', 'complete', name)
    };
}

function logMessage(msg, attr1, attr2) {
    msg = msg || '';
    if (attr2) {
        msg = `[${attr2}] ${msg}`;
    }
    if (attr1) {
        if (attr2) {
            msg = `[${attr1}]${msg}`;
        } else {
            msg = `[${attr1}] ${msg}`;
        }

    }
    msg = `${msg}  ${moment().format('mm:ss')}`;
    console.log(msg);
}

exports.subscriber = subscriber;
exports.logMessage = logMessage;