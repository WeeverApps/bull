'use strict';
const bunyan = require('bunyan');

const options = {
    name: 'bull',
    src: process.env.NODE_ENV === 'development',
    level: process.env.BUNYAN_DEBUG_LEVEL || 'info',
    serializers: {
        err: bunyan.stdSerializers.err
    }
};
module.exports = bunyan.createLogger(options);
