const log4js = require('log4js');
const config = require('./../configs/log4js');

log4js.configure(config);

module.exports = {
    app: function() {
        return log4js.getLogger('app');
    }
}