
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

function VersionError (doc, currentVersion, modifiedPaths) {
  var _id = doc && doc._id;
  var modifiedPathsStr = Array.isArray(modifiedPaths)
    ? modifiedPaths.join(', ')
    : undefined;
  MongooseError.call(this, 'No matching document found for id "' + _id +
    '" version ' + currentVersion + ' modifiedPaths ' + modifiedPathsStr);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'VersionError';
  this.version = currentVersion;
  this.modifiedPaths = modifiedPaths;
};

/*!
 * Inherits from MongooseError.
 */

VersionError.prototype.__proto__ = MongooseError.prototype;

/*!
 * exports
 */

module.exports = VersionError;
