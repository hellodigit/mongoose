
/*!
 * Module dependencies.
 */

var MongooseError = require('../error.js');

/**
 * Version Error constructor.
 *
 * @inherits MongooseError
 * @api private
 */

function VersionError (doc, currentVersion) {
  var _id = doc && doc._id;
  MongooseError.call(this, 'No matching document found for id "' + _id +
    '" version ' + currentVersion);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'VersionError';
  this.version = currentVersion;
};

/*!
 * Inherits from MongooseError.
 */

VersionError.prototype.__proto__ = MongooseError.prototype;

/*!
 * exports
 */

module.exports = VersionError;
