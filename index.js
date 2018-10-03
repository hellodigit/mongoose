
/**
 * Export lib/mongoose
 *
 */

var mongoose = require('./lib/');
mongoose.Promise = global.Promise;
module.exports = mongoose;
