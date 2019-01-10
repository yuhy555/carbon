"use strict";

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acronymize = acronymize;
exports.append = append;
exports.insertAt = insertAt;
exports.styleElement = styleElement;
exports.validProps = validProps;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.regexp.match");

var _lodash = require("lodash");

/**
 * Ether
 *
 * Ether provides functional-like helper methods for Carbon specific tasks.
 * As we are dealing with stateful values (user input, browser state) Ether
 * does not provide pure functions in all cases.
 */

/**
 * Creates an acronym from a given string.
 *
 * @method acronymize
 * @param {String} str
 * @return {String}
 */
function acronymize(str) {
  if (!str) return '';
  var matches = str.match(/\b\w/g);
  if (!matches) return '';
  return matches.join('');
}
/**
 * Stringifies and appends content to value.
 *
 * @method append
 * @param {String} value
 * @param {String} content
 * @return {String}
 */


function append(value, content) {
  return "".concat(value).concat(content);
}
/**
 * Sets style on element
 *
 * @method styleElement
 * @param {Object} element
 * @param {String} attribute
 * @param {Number} value
 * @return {Object} Styled Element
 */


function styleElement(element, attribute, value) {
  element.style[attribute] = value.toString();
  return element.style[attribute];
}
/**
 * Returns the props of the given instance filtered by
 * the static safeProps or the optional safeProps argument
 *
 * @method validProps
 * @param {Object} instance
 * @param {Array?} _safeProps
 * @return {Object} props
 */


function validProps(instance, safeProps) {
  var klass = instance.constructor;
  var unsafeProps = (0, _lodash.difference)(Object.keys(klass.propTypes), safeProps || klass.safeProps || []);
  return (0, _lodash.omit)(instance.props, unsafeProps);
}
/**
 * Returns string with inserted character at specified indices
 *
 * @method insertAt
 * @param {String} value - value without separators
 * @param {Object} options
 * * @param {String} separator - character to insert
 * * @param {Array} insertionIndices - indices where separator will be inserted
 * @return {String} result - formatted
 */


function insertAt(value, options) {
  var separator = options.separator || '-';
  var result = value;

  for (var i = 0; i < result.length; i++) {
    if ((0, _lodash.includes)(options.insertionIndices, i)) {
      result = result.substr(0, i) + separator + result.substr(i);
    }
  }

  return result;
}