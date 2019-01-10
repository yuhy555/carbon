"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _definition__ = _interopRequireDefault(require("./../link/__definition__"));

var _definition__2 = _interopRequireDefault(require("./../tooltip/__definition__"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('link', _.default, {
  description: "Navigates the user to another location.",
  designerNotes: "\n* Avoid using links for commands (performing an action like saving a form) - use them for navigating the user to a new location.\n* If you\u2019re navigating the user away from your site, consider using an icon after the link, and open the link in a new window, so the user doesn\u2019t lose their place.\n* To make the meaning of a link clearer, you can add an icon before it. Just name one of the Carbon icons.\n* Make your link names meaningful - for example, instead of \u2018Click here\u2019, try \u2018Download Invoice 001\u2019.\n* WCAG guidelines recommend that Color is not used as the only visual means of conveying information, indicating an action. Carbon applies bold weight, but you could also use text decoration.\n  ",
  relatedComponentsNotes: "\n* Need an icon to go with your link? [View Icons](/style/icons).\n ",
  type: 'action',
  propValues: {
    children: 'I\'m a link'
  },
  propTypes: {
    children: 'Node',
    className: 'String',
    disabled: 'Boolean',
    href: 'String',
    iconAlign: 'String',
    onClick: 'Function',
    onKeyDown: 'Function',
    tabbable: 'Boolean',
    to: 'String',
    tooltipAlign: "String",
    tooltipPosition: "String",
    tooltipMessage: "String"
  },
  propDescriptions: {
    children: 'Child content to render in the link.',
    className: 'Classes to apply to the component.',
    disabled: 'The disabled state of the link',
    href: 'An href for an anchor tag',
    icon: 'An icon to display next to the link.',
    iconAlign: 'Which side of the link to the render the link.',
    onClick: 'Function called when the mouse is clicked.',
    onKeyDown: 'Function called when a key is pressed.',
    tabbable: 'Whether to include the link in the tab order of the page',
    to: 'Using `to` instead of `href` will create a React Router link rather than a web href.',
    tooltipAlign: "Aligns the tooltip.",
    tooltipMessage: "A message to display as a tooltip to the link.",
    tooltipPosition: "Positions the tooltip with the link."
  },
  propOptions: {
    icon: _optionsHelper.default.icons,
    iconAlign: _optionsHelper.default.alignBinary,
    tooltipAlign: _optionsHelper.default.alignAroundEdges,
    tooltipPosition: _optionsHelper.default.positions
  }
});
var _default = definition;
exports.default = _default;