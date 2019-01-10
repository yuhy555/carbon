"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('tooltip', _.default, {
  description: "Additional information presented by hovering on a component.",
  designerNotes: "\n* A short paragraph of plain-text information shown to the user in context when they hover on any component. For example, to define how a particular figure is calculated, or the definition of a difficult technical term.\n  ",
  relatedComponentsNotes: "\n* Tooltip hovering on any Carbon icon? [Try Icon](/components/icon).\n* Tooltip from a question mark icon? [Try Help](/components/help).\n* Need a visual? [View Icons](/style/icons).__\n",
  type: 'miscellaneous',
  hiddenProps: ['id'],
  propValues: {
    isVisible: true,
    children: "I'm a helpful tooltip that can display more information to a user."
  },
  propOptions: {
    align: _optionsHelper.default.alignAroundEdges,
    position: _optionsHelper.default.positions
  },
  propTypes: {
    align: 'String',
    children: 'Node',
    className: 'String',
    id: 'String',
    isVisible: 'Boolean',
    position: 'String'
  },
  propDescriptions: {
    align: 'The alignment of the pointer on the tooltip.',
    children: 'Child content to render in the tooltip.',
    className: 'Classes to be applied to the component.',
    id: 'The id attribute to apply to the tooltip',
    isVisible: 'Whether to show or hide the tooltip. Use this with a handler to hide and show the tooltip',
    position: 'The position of the tooltip relative to its target element.'
  }
});
var _default = definition;
exports.default = _default;