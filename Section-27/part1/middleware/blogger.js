let moment = require('moment')
let bogger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next()
}
module.exports = bogger