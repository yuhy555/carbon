"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('detail', _.default, {
  description: "Prominent text callout with optional icon and footnote.",
  designerNotes: "\n* Useful to present some important text with prominence, for example, a quote, instruction, or callout.\n* Optional icon and footnote.\n* Make sure that the colour of all text has a contrast ratio of at least 4.5.1, to meet the [WCAG 2.0 AA standard](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) for text less than 19px in size. Webaim have a good online [Contrast Checker](http://webaim.org/resources/contrastchecker/).\n  ",
  relatedComponentsNotes: "\n* Simple text content? [Try Content](/components/content).\n* Headings and sections? [Try Heading](/components/heading).\n  ",
  propOptions: {
    icon: _optionsHelper.default.icons
  },
  propValues: {
    children: "An example of a detail.",
    footnote: "This detail may require a footnote."
  },
  propTypes: {
    className: "String",
    footnote: "String",
    icon: "String",
    children: "Node"
  },
  propDescriptions: {
    className: "Classes to apply to the component.",
    footnote: "Some additional notes for this detail.",
    icon: "Render a specific icon alongside your detail.",
    children: "This component supports children."
  }
});
var _default = definition;
exports.default = _default;