const moment = require('moment');          // Module For time and date format

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
};                         // simple midderware function


module.exports = logger