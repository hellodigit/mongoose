
/**
 * Export lib/mongoose
 *
 */

'use strict';

const mongoose = require('./lib/');

// https://mongoosejs.com/docs/migrating_to_5.html#id-getter
mongoose.set('objectIdGetter', false);

// https://mongoosejs.com/docs/deprecations.html#-findandmodify-
mongoose.set('useFindAndModify', false);

// https://mongoosejs.com/docs/migrating_to_5.html#array-required
mongoose.Schema.Types.Array.checkRequired(v => Array.isArray(v) && v.length);

module.exports = mongoose;
