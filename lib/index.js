/**
 * Module dependencies.
 */
var Strategy = require("./strategy");

/**
 * Framework version.
 */
require("pkginfo")(module, "version");

/**
 * Expose constructors.
 */

// Expose Strategy.
exports = module.exports = Strategy;

// Exports.
exports.Strategy = Strategy;
