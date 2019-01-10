"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Builds props object containing top level data tags
 *
 * @param {String} name of component
 * @param {Object} component props
 * @return {Object} dataTagProps
 */
function tagComponent(component, props) {
  var tagProps = {
    'data-component': component
  };

  if (props['data-element']) {
    tagProps['data-element'] = props['data-element'];
  }

  if (props['data-role']) {
    tagProps['data-role'] = props['data-role'];
  }

  return tagProps;
}

var _default = tagComponent;
exports.default = _default;