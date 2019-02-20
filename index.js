
/**
 * Export lib/mongoose
 *
 */

'use strict';

const mongoose = require('./lib/');
mongoose.set('objectIdGetter', false);
module.exports = mongoose;
