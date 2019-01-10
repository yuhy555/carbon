"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

var _optionsHelper = _interopRequireDefault(require("utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('button-toggle', _.default, {
  description: "Selects one option from a small number of highly visible options.",
  designerNotes: "\n* Useful if the user has a choice between a small number of options, that you\u2019d like to be highly visible (e.g. choosing between three or fewer subscription packages, with short names).\n* To make the meaning of an option clearer, you can add an icon to it. Just name one of the Carbon icons.\n  ",
  relatedComponentsNotes: "\n* Performing a single action? [Try Button](/components/button).\n* Range of buttons where one is more important? [Try Split Button](/components/split-button).\n* Range of buttons of the same importance? [Try Multi Action Button](/components/multi-action-button).\n* Choosing one option from a longer list? [Try Radio Button](/components/radio-button).\n* Choosing one option from a very long list? [Try Dropdown](/components/dropdown).\n* Choosing more than one option? [Try Checkbox](/components/checkbox).\n* Need a visual? [Try Icons](/style/icons).\n ",
  type: 'action',
  numberOfExamples: 3,
  propOptions: {
    buttonIcon: _optionsHelper.default.icons,
    buttonIconSize: _optionsHelper.default.sizesBinary,
    size: _optionsHelper.default.sizesBinary
  },
  propValues: {
    name: "option",
    children: "Option",
    value: "option-1"
  },
  propTypes: {
    buttonIcon: "String",
    buttonIconSize: "String",
    disabled: "Boolean",
    grouped: "Boolean",
    name: "String",
    size: "String",
    value: "String",
    children: "Node"
  },
  requiredProps: ['children'],
  propRequires: {
    buttonIconSize: "buttonIcon"
  },
  propDescriptions: {
    buttonIcon: "Define an icon to use for the button",
    buttonIconSize: "Define what size the icon should be. Possible values include: " + _optionsHelper.default.sizesBinary.join(", "),
    disabled: "Disable all user interaction.",
    grouped: "Removes the spacing between buttons.",
    name: "The label that will be used for the selected button. Use the same name across multiple buttons for them to operate as radio buttons.",
    size: "Define what size the button should be. This will default to large if not set. Possible values include: " + _optionsHelper.default.sizesBinary.join(", "),
    value: "The value associated with the selected button.",
    children: "The children to render for the button."
  },
  hiddenProps: ["name", "value"]
});
var _default = definition;
exports.default = _default;